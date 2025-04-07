const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    credits :{
        type : Number,
        default : 15
    }
})

const userModel = mongoose.models.user ||  mongoose.model("user", userSchema);

module.exports = userModel;