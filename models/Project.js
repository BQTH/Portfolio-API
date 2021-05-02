const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        /*type: Number,
        required: true,
        validate: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }*/
        type: String,
        required: true
    },
    urlbackimg: {
        type: String,
        required: true
    },
    urlpreviewimg: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Project', ProjectSchema);