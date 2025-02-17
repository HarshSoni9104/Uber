const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model')
const captainService  = require('../services/captain.service')
const {validationResult} = require('express-validator')

module.exports.registerCaptain = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname,email,password,vehicle} = req.body;
    console.log("Registering captain with email:", email);

    const isCaptainAlreadyExist = await captainModel.findOne({email})

    if(isCaptainAlreadyExist){
        console.log("Captain already exists with this email:", email);
        return  res.status(400).json({message:'Captain already exist'})
    }

    const hashedPassword = await captainModel.hashPassword(password)

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    //   // Log the captain object
    //   console.log("Created Captain: ", captain);

    //   // If generateAuthToken is not working, log the captain object to verify it's correct
    //   const token = captain ? captain.generateAuthToken() : undefined;

    //   // Log the token
    //   console.log("Generated Token: ", token);

    //   if (!captain || !token) {
    //       return res.status(500).json({ message: 'Error generating captain or token' });
    //   }

    const token = captain.generateAuthToken();

    res.status(201).json({token,captain})

}

module.exports.loginCaptain = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email,password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(400).json({ message:"Invalid email or password"})
    }

    const isMatch = await captain.comparePassword(password)

    if(!isMatch){
        return res.status(400).json({message:"Invalida email or password"})
    }

    const token= captain.generateAuthToken();

    res.cookie('token',token)

    res.status(200).json({token,captain})
}

module.exports.getCaptainProfile = async(req,res,next) => {
    res.status(200).json({captain: req.captain})
}


    module.exports.logoutCaptain = async (req, res, next) => {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    
        await blackListTokenModel.create({ token });
    
        res.clearCookie('token');
    
        res.status(200).json({ message: 'Logout successfully' });
    }
