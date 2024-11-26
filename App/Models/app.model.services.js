const mongoose = require('mongoose');

const AppSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Loan type is required for the service'],
    },
    code: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Service description is mandatory'],
    },
    imageUrl: {
        type: String,
    },
    detail: {
        type: Array,
    },
});

module.exports = mongoose.model('services', AppSchema);
