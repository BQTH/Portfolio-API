const mongoose = require('mongoose');

const PplSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ppl_count: {
        type: Number,
        required: true,
        validate: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Ppl', PplSchema);