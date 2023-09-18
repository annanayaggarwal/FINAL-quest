const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        option1: {
            type: String,
            required: true,
        },
        option2: {
            type: String,
            required: true,
        },
        option3: {
            type: String,
            required: true,
        },
        option4: {
            type: String,
            required: true,
        },
        correctAnswer: {
            type: String,
            required: true,
            enum: ['1', '2', '3', '4'],
        },
        category: {
            type: String,
            required: true,
            enum: ['c', 'aptitude', 'html/css', 'sql'],
        },
    },
    {
        timestamps: true,
    },
);

const question = mongoose.model('Question', questionSchema);

module.exports = question;
