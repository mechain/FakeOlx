const bcrypt  = require('bcrypt');
const User = require('../models/user.models');
const Response = require('../utlis/response');
const signUp = async (req,res) => {
    try{
    const { firstName , lastName , userName , password , email , mobile } = req.body
    const hashedPassword  =  await bcrypt.hash(password , 10);
    const newUser = await User.create({
        firstname:firstName,
        lastname : lastName,
        username: userName,
        password: hashedPassword , 
        email: email,
        mobile: mobile,
    });
    res.status(200).send(new Response(200  , "" , "User Created" , newUser));
    }catch(error){
        res.status(501).send(new Response(501 , "" , "User Not Created" , { error: error }))
    }
} 

module.exports = signUp;