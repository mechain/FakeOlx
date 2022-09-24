const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname: {
        type:String ,
        required :true,
        unique: true
    },
    lastname: {
        type:String ,
        required :true,
        unique: true
    },
    username: {
        type:String ,
        required :true,
        unique: true
    },
    email:{
        type: String , 
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    mobile: {
        type: String
    },
    token: [],
    
})
const User = mongoose.model('userInfo' , userSchema);
module.exports = User;