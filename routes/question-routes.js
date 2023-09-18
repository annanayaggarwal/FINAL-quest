const { addQuestionValidator, idValidator } = require('../validators/question.validator');
const { errorHandler } = require('../handlers/error-handler');
const adminAuth = require('../middlewares/admin.auth');
const { Router } = require('express');
const {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    fetchQuestionById,
    fetchAllQuestions,
} = require('../controllers/question.controller');

const router = Router();

router.post(
    '/',
    adminAuth,
    addQuestionValidator(),
    errorHandler(addQuestion),
);

router.delete(
    '/:id',
    adminAuth,
    idValidator(),
    errorHandler(deleteQuestion),
);

router.put(
    '/:id',
    adminAuth,
    idValidator(),
    errorHandler(updateQuestion),
);

router.get(
    '/',
    errorHandler(fetchAllQuestions),
);

router.get(
    '/:id',
    idValidator(),
    errorHandler(fetchQuestionById),
);

module.exports = router;
