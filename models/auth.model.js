const mongoose = require('mongoose')

const schema = mongoose.Schema({
    username : {
        type: String,
        required: true,
        max: 100
    },
    email:  {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 1024
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Auth', schema)