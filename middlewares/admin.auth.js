const jwt = require('jsonwebtoken');
const { findStudentById } = require('../services/auth.service');

const adminAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        req.user = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const id = req.user.student_id;
        const user = await findStudentById(id);

        if (!user) {
            return res.status(404).send({
                 errors: [{ msg: "Invalid User." }]
                })
        }
        else {
            if (user.role != "admin")
                return res.status(404).send({
                    errors: [{ msg: "You are not authorized." }]
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
module.exports = adminAuth;
