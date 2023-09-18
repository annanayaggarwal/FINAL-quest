const AuthRoutes = require('./auth-routes');
const QuestionRoutes = require('./question-routes');
const { submitTest } = require('../controllers/question.controller');
const { errorHandler } = require('../handlers/error-handler');
const studentAuth = require('../middlewares/student.auth');
const { Router } = require('express');

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/question', QuestionRoutes);

// Submit Route
router.post(
    '/submit',
    studentAuth,
    errorHandler(submitTest)
);
module.exports = router;