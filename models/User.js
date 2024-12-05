const mongoose = require('mongoose');
// import User from "./models/User"; 

const userSchema = new mongoose.Schema ({
    firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      contactNumber: { type: Number, required: false },
      email: {
        type: String,  
        required: false,
        unique: true,  
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'],
      },
    });


const User = mongoose.model('User', userSchema);
module.exports = User;