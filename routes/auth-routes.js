const { studentLogin, studentRegister} = require('../controllers/auth.controller');
const { getStudentLoginValidator, getStudentRegisterValidator} = require('../validators/auth.validator');
const { errorHandler } = require('../handlers/error-handler');

const { Router } = require('express');

const router = Router();

router.post(
    '/login',
    getStudentLoginValidator(),
    errorHandler(studentLogin)
);

router.post(
    '/register',
    getStudentRegisterValidator(),
    errorHandler(studentRegister)
);

module.exports = router;
