const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    address: String,
    age: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Employee', schema)