const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// Define collection and schema for Course
const coursesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    course_name: {
        type: String,
        required: true,
        unique: true
    },
    course_code: {
        type: String,
        required: true,
        unique: true
    },
    registered_students: {
        type: Number,
    }
});

coursesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Course', coursesSchema);