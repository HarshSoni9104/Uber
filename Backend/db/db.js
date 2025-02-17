const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}

module.exports = connectToDb;
// function connectToDb() {
//     mongoose.connect(process.env.DB_CONNECT, {           
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(() => {
//         console.log('Connected to DB');
//     }).catch(err => {
//         console.error('DB Connection Error:', err);
//     });
// }
// module.exports = connectToDb;   
