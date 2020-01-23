let count = 0;
let start = false;

function startGame() {
  // (start = true;) ig if the opposite of false (->true) start the game;
  if (!start) {
    showQuestion();
    btnStart.style.visibility = "hidden"; //hide button start wenn the game starts
    answerBox.style.visibility = "visible";
  }
}

function checkCurrentAnswer(event) {
  count++;
  if (count <= 1) {  //only when clicked option button for first time
    let answer = event.currentTarget.innerHTML;
    let answerBtn = event.currentTarget;
    let correct = questionArr[currentQuestion - 1].correctAnswer;

    btnNext.style.visibility = "visible" // buttonNExt visibility show 
    console.log('answe', answer)
    console.log('correct', correct)

    if (answer === correct) {
      score++;
      answerBtn.style.backgroundColor = "green";
    } else {
      answerBtn.style.backgroundColor = "red";
    };
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function showQuestion() {
  count = 0
  // answerBox.style.visibility = "visible"
  btnNext.style.visibility = "hidden"
  options.forEach(function (button) {
    button.style.backgroundColor = "white";
  });

  let currentQuestionIndex = currentQuestion;
  questionBoxH3.innerHTML = questionArr[currentQuestionIndex].question;

  let arr = [0, 1, 2];

  arr = shuffle(arr) //TODO make options appear at random position

  options[arr[0]].innerHTML = questionArr[currentQuestionIndex].correctAnswer;
  options[arr[1]].innerHTML = questionArr[currentQuestionIndex].wrongAnswer1;
  options[arr[2]].innerHTML = questionArr[currentQuestionIndex].wrongAnswer2;

  if (currentQuestionIndex < questionArr.length - 1) {
    currentQuestion++;
  }
}

function finalResult() {
  //show final score
  console.log(score)
}

const body = document.getElementsByTagName("body");
const mainContainer = document.getElementsByClassName(".mainContainer");
const questionBox = document.getElementsByClassName(".questionBox");
const questionBoxH3 = document.querySelector(".questionBox > h3");
const answerBox = document.querySelector(".answerBox");
const options = document.querySelectorAll(".options button");
const btnNext = document.querySelector(".btn-next");
const btnStart = document.querySelector(".btn-start");



console.log(btnStart)
btnStart.onclick = startGame

let currentQuestion = 0;
let score = 0;

//dom to set innerHTML to score
//dom to set innerHTML to currentQuestion+1 / questionArr.length

btnNext.onclick = showQuestion;

options.forEach(function (button) {
  button.onclick = checkCurrentAnswer;

});




