const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Input your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++ ) { 
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers, correctAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let correctResponses = 0;
  let incorrectResponses = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
      correctResponses++;
    } else {
      incorrectResponses++;
    }
  }

  let grade;

  if (correctResponses === 0) {
    grade = "0%";
  } else if (correctResponses === 1) {
    grade = "20%";
  } else if (correctResponses === 2) {
    grade = "40%";
  } else if (correctResponses === 3) {
    grade = "60%";
  } else if (correctResponses === 4) {
    grade = "80%";
  } else if (correctResponses === 5) {
    grade = "100%";
  } else {
    console.log("You failed or did not respond to all questions.");
  }

  return "You received a " + grade;
}

function runProgram() {
  askForName();
  console.log("Hello and welcome, " + candidateName + "!");
  askQuestion();
  const result = gradeQuiz(candidateAnswers, correctAnswers);
  console.log(result);
}

runProgram();
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};