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
    }
},{timestamps: true});
const User = mongoose.models.user || mongoose.model('user', userSchema);
module.exports = User 