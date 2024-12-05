const mongoose = require('mongoose');
// import User from "./models/User"; 

const userSchema = new mongoose.Schema ({
    firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      contactNumber: { type: Number, required: false },
      email: {
        type: String,  
        required: true
      },
    });


const User = mongoose.model('User', userSchema);
module.exports = User;