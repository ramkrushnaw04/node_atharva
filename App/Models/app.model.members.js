const mongoose = require('mongoose');

const AppSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        maxlength: [15, 'Mobile number cannot exceed 15 digits'],
        minlength: [10, 'Mobile number must be at least 10 digits long'],
    },
    email: {
        type: String,
        required: [true, 'Email is mandatory for registration'],
        unique: [true, 'This email is already registered'],
    },
    occupation: {
        type: String,
        required: [true, 'Occupation field cannot be empty'],
    },
    createpassword: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        maxlength: [15, 'Password cannot exceed 15 characters'],
    },
});

module.exports = mongoose.model('Member', AppSchema);
