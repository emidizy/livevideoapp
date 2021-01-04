
const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'Kindly provide test id']
    },
    name: {
        type: String,
        required: [true, 'Kindly provide name']
    },
    regDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const testModel = mongoose.model('Test', TestSchema);

module.exports = testModel;