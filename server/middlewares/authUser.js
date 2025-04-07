const express = require('express');
const jwt = require('jsonwebtoken');

const userAuth = async function(req, res ,next) {
    //embedd token in body to be used in auth
    const {token} = req.headers;
    if(!token){
        return res.json({success:false , message : "Not Authorised , Login first"})
    }
    try {
        const tokenDecode = await jwt.verify(token , process.env.JWT_SECRET);

        if(!tokenDecode.id) {
            return res.json({success:false , message:"Not Authorised , Login first"});
        }

        console.log(req.body);
        req.userId = tokenDecode.id;
        next();

    } catch (error) {
        console.log(error);
        res.json({success:false , message: error.message});
    }
} 

module.exports = userAuth;