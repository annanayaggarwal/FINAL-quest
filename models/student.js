const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
     //   required: true
    },
    branch:{
        type:String,
        enum:['CSE','CS','CSE(AI/ML)','CSE(DS)','CS/IT','IT','AIML']
    },
    studentNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    rollNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowerCase: true,
    },
    skills: [
        {
            type: String,
            trim: true,
        }],
    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student',
    },
    score: {
        type: Number
    },
    hackerrankHandle: {
        type: String
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Student', studentSchema);
