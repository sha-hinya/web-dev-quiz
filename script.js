let count = 0
let start = false


//button.onclick = startGame()


function startGame() {
  start = true

  if (start === true) {
    showQuestion();
  }
  //hide button start
}

function checkCurrentAnswer(event) {
  count++;



  if (count <= 1) {  //only when clicked option button for first time
    let answer = event.currentTarget.innerHTML;
    let answerBtn = event.currentTarget;
    let correct = questionArr[currentQuestion - 1].correctAnswer;

    btnNext.style.visibility = "visible"






    // buttonNExt visibility show 
    console.log('answe', answer
    )

    console.log('correct', correct)
    if (answer === correct) {
      score++;
      answerBtn.style.backgroundColor = "green";
    } else {
      answerBtn.style.backgroundColor = "red";
    };



  }


  //is user answer== to correct answer
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

  btnNext.style.visibility = "hidden"


  options.forEach(function (button) {
    button.style.backgroundColor = "white";

  });

  let currentQuestionIndex = currentQuestion;
  questionBoxH3.innerHTML = questionArr[currentQuestionIndex].question;

  //TODO make options appear at random position
  let arr = [0, 1, 2];

  arr = shuffle(arr)

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
const answerBox = document.getElementsByClassName(".answerBox");
const options = document.querySelectorAll(".options button");
const btnNext = document.querySelector(".btn-next");
let currentQuestion = 0;
let score = 0;
// let firstQuestion = questionArr[0].question;
// let secondQuestion = questionArr[1].question;

//dom to set innerHTML to score
//dom to set innerHTML to currentQuestion+1 / questionArr.length

btnNext.onclick = showQuestion;

options.forEach(function (button) {
  button.onclick = checkCurrentAnswer;

});




