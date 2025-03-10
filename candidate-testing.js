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
  const name = input.question("Input your name: ");
  return name;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++ ) { 
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {
  let grade = 0;

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  for (i = 0; i < questions.length; i++){
    console.log(questions[i]);

    if (candidateAnswers[i].toLowerCase() != correctAnswers[i].toLowerCase()){
      console.log("Incorrect. The correct answer is: " + correctAnswers[i] + ".");
    }else{
      console.log(correctAnswers[i] + " is correct.");
      grade+=(100/candidateAnswers.length);
    }
  }
    //TODO 3.2 use this variable to calculate the candidates score.

    if (grade >= 80){
      console.log(`Congratulations! You passed the initial testing with a grade of ${grade}!`);
    }else{
      console.log(`Unfortunately, you need an 80% or higher to pass this test. You scored ${grade}.`)
    }

  return grade;
}

function runProgram() {
 candidateName = askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello and welcome, " + candidateName + "!");
  askQuestion();
  grade = gradeQuiz(candidateAnswers);
  console.log(grade)
}
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