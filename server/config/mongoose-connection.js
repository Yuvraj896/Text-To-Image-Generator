const mongoose = require('mongoose');   

const connectDB = async function () {
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
        .then(function(){
            console.log("Database Connected");
        })
        .catch (function(err){
            console.log(err);
        })
}

module.exports = connectDB;
