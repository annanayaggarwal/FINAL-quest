const Student = require('../models/student');
const bcrypt = require('bcryptjs');

const findStudentByEmail = (email) => {
    return Student.findOne({ email });
};

const findStudentById = (id) => {
    return Student.findById(id);
};

const createStudent = (studentData) => {
     const student = new Student({ ...studentData });
     return student.save();
};

const updateStudent = (id, updates) => {
    return Student.findByIdAndUpdate(id, updates, { new: true });
};

const removeStudentById = (id) => {
    return Student.findByIdAndRemove(id);
};

const removeStudentByEmail = (email) => {
    return Student.findOneAndDelete({ email });
};

const comparePassword = (inputPassword, oldPassword) => {
    return bcrypt.compareSync(inputPassword, oldPassword);
};

const hashPassword = (password) => {
    return new Promise(((resolve, reject) => {
        bcrypt.genSalt(10, (error, salt) => {
            if (!error) {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(hash);
                });
            }
        });
    }));
};

module.exports = {
    findStudentById,
    findStudentByEmail,
    comparePassword,
    hashPassword,
    createStudent,
    updateStudent,
    removeStudentByEmail,
    removeStudentById
};
