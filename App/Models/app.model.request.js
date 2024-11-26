const mongoose = require('mongoose');

const AppSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        maxlength: [15, 'Mobile number cannot exceed 15 digits'],
        minlength: [10, 'Mobile number must be at least 10 digits long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required for the user'],
        unique: [true, 'This email is already in use'],
    },
    amt: {
        type: Number,
        required: [true, 'Amount is a mandatory field'],
    },
    type: {
        type: String,
        required: [true, 'Loan type must be specified'],
    },
    msg: {
        type: String,
        default: 'No message provided',
    },
    code: {
        type: String,
    },
});

module.exports = mongoose.model('Request', AppSchema);
