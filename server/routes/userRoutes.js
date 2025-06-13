const express = require('express');
const {registerUser, loginUser, userCredits} = require('../controllers/userController');
const userAuth = require('../middlewares/authUser');

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits', userAuth, userCredits);

module.exports = userRouter;