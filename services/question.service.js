const Question = require('../models/question');

const createQuestion = async(data) => {
    try {
        const question = new Question(data);
        return await question.save();
    } catch (e) {
        console.log(e);
    }
};

const findQuestionById = (id, omit) => {
    return Question.findById(id).select(`-${omit}`);
};

const findQuestionByDescription = (description) => {
    return Question.findOne({ description });
};

const removeQuestionById = (id) => {
    return Question.findByIdAndDelete(id);
};

const findQuestionByCategory = (category, omit) => {
    return Question.find({ category }).select(`-${omit}`);
};

const findAllQuestions = (omit) => {
    return Question.find().select(`-${omit}`);
};

const updateQuestionById = (id, updates) => {
    return Question.findByIdAndUpdate(id, updates, { new: true });
};

const calculateScore = async(answers) => {
    let score = 0;

    for (const answer of answers) {
        const question = await findQuestionById(answer.question);
        if (answer.answer !== null) {
            if (question.correctAnswer === answer.answer) score += 4;
            
        }
    }
    return score;
};

module.exports = {
    findQuestionByDescription,
    findQuestionById,
    findQuestionByCategory,
    findAllQuestions,
    updateQuestionById,
    removeQuestionById,
    createQuestion,
    calculateScore,
};