// const {
//   findQuestionByDescription,
//   findQuestionById,
//   removeQuestionById,
//   findQuestionByCategory,
//   findAllQuestions,
//   updateQuestionById,
//   createQuestion,
//   calculateScore,
// } = require("../services/question.service");
//
// const { updateStudent } = require("../services/auth.service");
//
// const addQuestion = async (req, res, next) => {
//   try {
//     const existingQuestion = await findQuestionByDescription(
//       req.body.description
//     );
//
//     if (existingQuestion) {
//       return res.status(409).send({
//         errors: [{ msg: "Question already exist" }],
//       });
//     }
//     const question = await createQuestion(req.body);
//     res.status(201).send({ data: question });
//   } catch (e) {
//     res.status(500).send({
//       errors: [{ msg: "Something went wrong." }],
//     });
//   }
// };
//
// const fetchQuestionById = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const question = await findQuestionById(id);
//
//     if (!question) {
//       return res.status(404).send({
//         errors: [{ msg: "Question not found." }],
//       });
//     }
//     res.status(200).send(question);
//   } catch (e) {
//     res.status(500).send({
//       errors: [{ msg: "Something went wrong." }],
//     });
//   }
// };
//
// function getRandom(arr, n) {
//   var result = new Array(n),
//     len = arr.length,
//     taken = new Array(len);
//   if (n > len)
//     throw new RangeError("getRandom: more elements taken than available");
//   while (n--) {
//     var x = Math.floor(Math.random() * len);
//     result[n] = arr[x in taken ? taken[x] : x];
//     taken[x] = --len in taken ? taken[len] : len;
//   }
//   return result;
// }
//
// const fetchAllQuestions = async (req, res, next) => {
//   const category = req.query.category;
//   let questions = [];
//
//   try {
//     if (category) {
//       questions = await findQuestionByCategory(category, "correctAnswer");
//
//       let random = getRandom(questions, 4);
//     } else {
//       questions = await findAllQuestions("correctAnswer");
//       const cques = [];
//       const sqlques = [];
//       const htmlcss = [];
//       const apti = [];
//       for (var i = 0; i < questions.length; i++) {
//         let curr = questions[i].category;
//         if (curr === "c") cques.push(questions[i]);
//         else if (curr === "sql") sqlques.push(questions[i]);
//         else if (curr === "html/css") htmlcss.push(questions[i]);
//         else apti.push(questions[i]);
//       }
//
//       let merged = [];
//
//       let random = getRandom(cques, 5);
//       merged = merged.concat(random);
//       random = getRandom(sqlques, 2);
//       merged = merged.concat(random);
//       random = getRandom(htmlcss, 10);
//       merged = merged.concat(random);
//       random = getRandom(apti, 7);
//       merged = merged.concat(random);
//       res.send(merged);
//     }
//
//     if (!questions) {
//       return res.status(404).send({
//         errors: [{ msg: "Questions not found" }],
//       });
//     }
//
//     res.json({ questions });
//     // questions = []
//   } catch (e) {
//     console.log(e);
//     res.status(500).send({
//       errors: [{ msg: "Something went wrong." }],
//     });
//   }
// };
//
// const updateQuestion = async (req, res, next) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = [
//     "description",
//     "option1",
//     "option2",
//     "option3",
//     "option4",
//     "correctAnswer",
//     "category",
//   ];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );
//
//   if (!isValidOperation) {
//     return res.status(400).send({
//       errors: [{ msg: "Invalid updates" }],
//     });
//   }
//   const id = req.params.id;
//   try {
//     const question = await findQuestionById(id);
//     console.log(question);
//     if (!question) {
//       return res.status(404).send({
//         errors: [{ msg: "Question not found" }],
//       });
//     }
//
//     const updatedQuestion = await updateQuestionById(id, req.body);
//
//     res.send(updatedQuestion);
//   } catch (e) {
//     res.status(400).send({
//       errors: [{ msg: "Something went wrong" }],
//     });
//   }
// };
//
// const deleteQuestion = async (req, res, next) => {
//   const id = req.params.id;
//   try {
//     const question = await findQuestionById(id);
//
//     if (!question) {
//       return res.status(404).send({
//         errors: [{ msg: "Question not found" }],
//       });
//     }
//
//     await removeQuestionById(id);
//
// <<<<<<< HEAD
//     const answers = req.body;
//     try {
//         // console.log(answers);
//         const score = await calculateScore(answers);
//         // console.log(score);
//         await updateStudent(req.user.student_id, { 'score': score });
//         res.send({
//             score,
//         });
//     } catch (e) {
//         res.status(500).send({
//             errors: [{ msg: 'Something went wrong' }],
//         });
//     }
// =======
//     res.status(201).send({
//       msg: "Question deleted successfully",
//     });
//   } catch (e) {
//     res.status(500).send({
//       errors: [{ msg: "Something went wrong" }],
//     });
//   }
// >>>>>>> ae88eb40ec6efa6b752d67c07a8de4e34ef6bc3d
// };
//
// const submitTest = async (req, res, next) => {
//   const answers = req.body;
//   try {
//     const score = await calculateScore(answers);
//     await updateStudent(req.user.student_id, { score: score });
//
//     res.send({
//       score,
//     });
//   } catch (e) {
//     res.status(500).send({
//       errors: [{ msg: "Something went wrong" }],
//     });
//   }
// };
//
// module.exports = {
//   addQuestion,
//   deleteQuestion,
//   updateQuestion,
//   fetchQuestionById,
//   fetchAllQuestions,
//   submitTest,
// };


const {
  findQuestionByDescription,
  findQuestionById,
  removeQuestionById,
  findQuestionByCategory,
  findAllQuestions,
  updateQuestionById,
  createQuestion,
  calculateScore,
} = require("../services/question.service");

const { updateStudent } = require("../services/auth.service");

const addQuestion = async (req, res, next) => {
  try {
    const existingQuestion = await findQuestionByDescription(
        req.body.description
    );

    if (existingQuestion) {
      return res.status(409).send({
        errors: [{ msg: "Question already exist" }],
      });
    }
    const question = await createQuestion(req.body);
    res.status(201).send({ data: question });
  } catch (e) {
    res.status(500).send({
      errors: [{ msg: "Something went wrong." }],
    });
  }
};

const fetchQuestionById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const question = await findQuestionById(id);

    if (!question) {
      return res.status(404).send({
        errors: [{ msg: "Question not found." }],
      });
    }
    res.status(200).send(question);
  } catch (e) {
    res.status(500).send({
      errors: [{ msg: "Something went wrong." }],
    });
  }
};

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const fetchAllQuestions = async (req, res, next) => {
  const category = req.query.category;
  let questions = [];

  try {
    if (category) {
      questions = await findQuestionByCategory(category, "correctAnswer");

      let random = getRandom(questions, 4);
    } else {
      questions = await findAllQuestions("correctAnswer");
      const cques = [];
      const sqlques = [];
      const htmlcss = [];
      const apti = [];
      for (var i = 0; i < questions.length; i++) {
        let curr = questions[i].category;
        if (curr === "c") cques.push(questions[i]);
        else if (curr === "sql") sqlques.push(questions[i]);
        else if (curr === "html/css") htmlcss.push(questions[i]);
        else apti.push(questions[i]);
      }

      let merged = [];

      let random = getRandom(cques, 10); //10
      merged = merged.concat(random);
      random = getRandom(sqlques, 4);//4
      merged = merged.concat(random);
      random = getRandom(htmlcss, 10); // 10
      merged = merged.concat(random);
      random = getRandom(apti, 6);//6
      merged = merged.concat(random);
      res.send(merged);
    }

    if (!questions) {
      return res.status(404).send({
        errors: [{ msg: "Questions not found" }],
      });
    }

    // res.json({ questions });
    // questions = []
  } catch (e) {
    console.log(e);
    res.status(500).send({
      errors: [{ msg: "Something went wrong." }],
    });
  }
};

const updateQuestion = async (req, res, next) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "description",
    "option1",
    "option2",
    "option3",
    "option4",
    "correctAnswer",
    "category",
  ];
  const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({
      errors: [{ msg: "Invalid updates" }],
    });
  }
  const id = req.params.id;
  try {
    const question = await findQuestionById(id);
    console.log(question);
    if (!question) {
      return res.status(404).send({
        errors: [{ msg: "Question not found" }],
      });
    }

    const updatedQuestion = await updateQuestionById(id, req.body);

    res.send(updatedQuestion);
  } catch (e) {
    res.status(400).send({
      errors: [{ msg: "Something went wrong" }],
    });
  }
};

const deleteQuestion = async (req, res, next) => {
  const id = req.params.id;
  try {
    const question = await findQuestionById(id);

    if (!question) {
      return res.status(404).send({
        errors: [{ msg: "Question not found" }],
      });
    }

    await removeQuestionById(id);

    res.status(201).send({
      msg: "Question deleted successfully",
    });
  } catch (e) {
    res.status(500).send({
      errors: [{ msg: "Something went wrong" }],
    });
  }
};

const submitTest = async (req, res, next) => {
  const answers = req.body;
  try {
    const score = await calculateScore(answers);
    console.log(score)
    await updateStudent(req.user.student_id, { score: score });

    res.send({
      score,
    });
  } catch (e) {
    res.status(500).send({
      errors: [{ msg: "Something went wrong" }],
    });
  }
};

module.exports = {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  fetchQuestionById,
  fetchAllQuestions,
  submitTest,
};