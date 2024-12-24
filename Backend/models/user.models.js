import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'Too short'],
        },
        lastname:{
            type: String,
            minlength: [3, 'Too short'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Too short'],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Too short'],
        select:false
    },
    socketId: {
        type: String,
    },
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    return token;
}
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const User = mongoose.model('user', userSchema);

export default User;