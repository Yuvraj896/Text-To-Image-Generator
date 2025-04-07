const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async function(req,res){
    try {
        const {name , email , password} = req.body;

        //check if all info is provided
        if(!name || !email || !password){
            return res.json({success: false , message: "Details not filled"});
        }

        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(password, salt);

        let createdUser = await userModel.create({
            name,
            email,
            password: hash_password
        })

        console.log(createdUser);

        const token = jwt.sign({id: createdUser._id}, process.env.JWT_SECRET);
        // res.cookie("Token", token);
        res.json({success: true , token , user: {name: createdUser.name}});

    } catch (error) {
        console.log(error);
        res.json({success:false , message: error.message});
    }
}


const loginUser = async function(req,res){
    try {
        const {email ,password}= req.body;
        if(!email || !password){
            return res.json({success: false , message: "Details not filled"});
        }

        const user = await userModel.findOne({email});
        console.log(user);

        if(!user){
            return res.json({success:false , message: "Invalid email or password"})
        }

        const isMatched = await bcrypt.compare(password, user.password);
        if( !isMatched ){
            return res.json({success:false , message: "Invalid email or password"})
        }

        //now let user login
        const token = await jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.json({success:true , token, user : {name : user.name}})

    } catch (error) {
        console.log(error);
        res.json({success:false , message: error.message});
    }
}

const userCredits = async function(req, res) {
    try {
        const userId = req.userId;
        const user = await userModel.findById(userId);

        return res.json({success: true , userCredit : user.credits , user: {name : user.name}});
        
    } catch (error) {
        console.log(error);
        res.json({success:false , message: error.message});
    }
}

module.exports = { registerUser, loginUser, userCredits };
