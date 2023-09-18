const { check, param } = require('express-validator');

const addQuestionValidator = () => {
    return [
        check('description', 'invalid description').not().isEmpty(),
        check('option1', 'invalid option').not().isEmpty(),
        check('option2', 'invalid option').not().isEmpty(),
        check('option3', 'invalid option').not().isEmpty(),
        check('option4', 'invalid option').not().isEmpty(),
        check('correctAnswer', 'invalid answer').isIn(['1', '2', '3', '4']),
        check('category', 'invalid category').isIn(['c', 'aptitude', 'html/css', 'sql']),
    ];
};

const idValidator = () => {
    return [
        param(
            'id',
            'validation:create:invalid Id',
        ).not().isNumeric(),
    ];
};

module.exports = { addQuestionValidator, idValidator };
