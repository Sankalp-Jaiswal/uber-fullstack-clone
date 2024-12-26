import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be atleast 3 characters long']
        },
        lastname: {
            type: String,
        },
    },
    email: { 
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'],
        unique: true,
    },
    password: { 
        type: String,
        required: true,
        minlength: [8, 'Password must be atleast 8 characters long'],
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be atleast 3 characters long']
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate number must be atleast 3 characters long']
        },
        capacity:{  
            type: Number,
            required: true,
            min: [1, 'Capacity must be atleast 1']
            },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car','bike','auto','Car', 'Bike','Auto'],
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    },
});

captainSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};



const Captain = mongoose.model('Captain', captainSchema);

export default Captain;