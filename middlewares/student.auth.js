const jwt = require('jsonwebtoken');
const { findStudentById } = require('../services/auth.service');

const studentAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
    
        const id = req.user.student_id;
        const user = await findStudentById(id);
        if (!user) {
            return res.status(404).send({ 
                errors: [{ msg: "Invalid User." }] 
            })
        }
        else {
            if (user.role != "student")
                return res.status(404).send({ 
                    errors: [{ msg: "Student not found." }] 
                })
            else
                next();
        }
    }
    catch (e) {
        res.status(401).send({ 
             errors: [{ msg: "Token is not valid." }] 
            })
    }
}
module.exports = studentAuth;