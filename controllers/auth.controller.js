const jwt = require('jsonwebtoken');
const {
    findStudentByEmail,
    comparePassword,
    createStudent,
    hashPassword,
} = require('../services/auth.service');


const studentLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const student = await findStudentByEmail(email);
        if (!student) {
            return res.status(404).json({
                errors: [{ msg: 'Student not found' }],
            });
        }
        const isPasswordCorrect = comparePassword(password, student.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                errors: [{ msg: 'Password is Incorrect' }],
            });
        }

        const token = jwt.sign({
            student_id: student._id,
            email: student.email,
        }, process.env.JWT_SECRET_KEY);

        res.json({
            token,
            user: student,
        });
    } catch (e) {
        res.status(500).send({
            errors: [{ msg: 'Something went wrong' }],
        });
    }
};

const studentRegister = async (req, res, next) => {
    try {
        const existingStudent = await findStudentByEmail(req.body.email);

        if (existingStudent) {
            return res.status(409).send({
                errors: [{ msg: 'Student email already exist' }],
            });
        }
        if(req.body.password) {
            // return res.status(409).send({
            //     errors: [{ msg: 'Password is required' }]
            // });
            req.body.password = await hashPassword(req.body.password);
        }
        // req.body.skills = req.body.skills.split(',');
        const newStudent = await createStudent(req.body);

        const token = jwt.sign({
            student_id: newStudent._id,
            email: newStudent.email,
        }, process.env.JWT_SECRET_KEY);

        res.status(201).json({
            token,
            user: newStudent,
        });
    } catch (e) {
        res.status(500).send({
            errors: [{ msg: 'Something went wrong' }],
        });
    }
};

module.exports = {
    studentLogin,
    studentRegister,
};
// https://sheltered-springs-36344.herokuapp.com/