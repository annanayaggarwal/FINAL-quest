const { check } = require('express-validator');


const getStudentLoginValidator = () => {
    return [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Invalid password').not().isEmpty()
    ];
};

const getStudentRegisterValidator = () => {
    return [
     //   ...getStudentLoginValidator(),
        check('email', 'validation:create:invalid email').isEmail(),
        check('name', 'validation:create:invalid name').not().isEmpty(),
        check('phoneNumber', 'validation:create:invalid phoneNumber').isNumeric(),
        check('phoneNumber', 'validation:create:invalid phoneNumber').isMobilePhone("en-IN"),
        check('phoneNumber', 'validation:create:invalid phoneNumber').isLength({min:10,max:10}),
        check('rollNumber', 'validation:create:invalid rollNumber').isNumeric(),
        check('studentNumber', 'validation:create:invalid studentNumber').isNumeric(),
        check('studentNumber', 'validation:create:invalid studentNumber').isLength({ min: 7 }),
        check('skills', 'validation:create:invalid skills').not().isEmpty(),
        check('branch', 'validation:create:invalid branch').isIn(['CSE','CS','CSE(AI/ML)','CSE(DS)','CS/IT','IT','AIML'])
        // check('role', 'validation:create:invalid role').not().isEmpty(),
        // check('role', 'validation:create:invalid role').isIn(['student', 'admin']),
    ];
};

module.exports = { getStudentLoginValidator, getStudentRegisterValidator};
