const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : 
    {
        type : String,
        required : true ,
        unique : true
    },
    password :
    {
        type : String,
        required : true
    } ,
    googleId :{
        type :String,
        unique :true,
        sparse : true
    }
},{timestamps: true});

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;