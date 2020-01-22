function checkCurrentAnswer(event) {
  let answer = event.currentTarget.innerHTML;

  let correct = questionArr[currentQuestion - 1].correctAnswer;

  //is user answer== to correct answer
}

function showQuestion() {
  console.log(questionArr.length);
  console.log(currentQuestion);
  let currentQuestionIndex = currentQuestion;
  //TODO make options appear at random position
  questionBoxH3.innerHTML = questionArr[currentQuestionIndex].question;

  let arr = [0, 1, 2];
  //shuffle arr

  options[arr[0]].innerHTML = questionArr[currentQuestionIndex].correctAnswer;
  options[arr[1]].innerHTML = questionArr[currentQuestionIndex].wrongAnswer1;
  options[arr[2]].innerHTML = questionArr[currentQuestionIndex].wrongAnswer2;

  if (currentQuestionIndex < questionArr.length - 1) {
    currentQuestion++;
  }
}

function finalResult() {
  //show final score
}

const body = document.getElementsByTagName("body");
const mainContainer = document.getElementsByClassName(".mainContainer");
const questionBox = document.getElementsByClassName(".questionBox");
const questionBoxH3 = document.querySelector(".questionBox > h3");
const answerBox = document.getElementsByClassName(".answerBox");
const options = document.querySelectorAll(".options button");
const btnNext = document.querySelector(".btn-next");
let currentQuestion = 0;
let score = 0;
// let firstQuestion = questionArr[0].question;
// let secondQuestion = questionArr[1].question;

btnNext.onclick = showQuestion;

options.forEach(function(button) {
  button.onclick = checkCurrentAnswer;
});

showQuestion();
