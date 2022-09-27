var startbutton = document.querySelector('#startbutton')
var quizEl = document.querySelector('#quiz')
var questionEl = document.createElement("h2")
var timerEl = document.querySelector('.timer')
var ul = document.querySelector(".answers")
var timer;
var counter = 0
var score = 90
var correctAnswerScore = 0
var questionsArray = [
    {
        question: "Which is considered the backbone of a webpage?",
        answers: ["A - HTML", "B - CSS", "C - JavaScript", "D - JQuiry"],
        correctAnswer: "A - HTML"

    }, {
        question: "What language defines the behavior of a web page?",
        answers: [" A - HTML", " B - CSS", "C - XML", "D - Java Script"],
        correctAnswer: "D - Java Script"
    }, {
        question: "Which is the proper html syntax to insert Javascript into your html file?",
        answers: ["A - < javascript>", "B - <script>", "C - < js>", "D - <scripts>"],
        correctAnswer: "B - <script>"
    }, {
        question: "What does CSS stand for",
        answers: ["Cedar Sweet Syrup", "Cascading Style Sheats", "Collapsing Styling Syntax", "Styles"],
        correctAnswer: "Cascading Style Sheats"
    }, {
        question: "Which is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?",
        answers: ["A - concat()", "B - match()", "C - replace()", "D - search()"],
        correctAnswer: "B - match()"
    }, {
        question: " Which of the following function of String object returns the calling string value converted to upper case?",
        answers: ["A - toLocaleUpperCase()", "B - toUpperCase()", "C - toString()", "D - substring()"],
        correctAnswer: "B - toUpperCase()"
    }
]

startbutton.addEventListener("click", function () {
    startbutton.style.display = "none";
    displayQuestion(counter)
    countdown();


});
function countdown() {
    timer = setInterval(function () {
        score--;
        console.log(score)
        if (score === 1) {
            timerEl.textContent = (score + " second")
        }
        timerEl.textContent = (score + " seconds")
    }, 1000);

}
function displayQuestion(counter) {
    quizEl.appendChild(questionEl);
    questionEl.innerHTML = ""
    ul.innerHTML = "";

    for (let i = 0; i < questionsArray.length; i++) {
        let userQuestion = questionsArray[counter].question

        var userAnswers = questionsArray[counter].answers
        questionEl.textContent = userQuestion;
    }
    userAnswers.forEach(function (nextQuestion) {
        var answersEl = document.createElement('li')
        answersEl.textContent = nextQuestion;
        ul.appendChild(answersEl)
        answersEl.addEventListener("click", (checkAnswer))
    })
}
var confirm = 0
    var initials=0;
function checkAnswer(event) {
    let element = event.target;
    if (element.matches("li")) {
        if (element.textContent == questionsArray[counter].correctAnswer) {
            console.log("correct")
            correctAnswerScore++
            console.log(correctAnswerScore)
        } else {
            console.log("wrong")
            score -= 30
            console.log(correctAnswerScore)
        }

    }
    counter++
    var confirm = 0
    var initials=0;
    if (score < 0) {
        score = 0
        questionEl.innerHTML = "Quiz Over!"
        clearInterval(timer)
        initials = window.prompt("Input your initials for score keeping!")

        confirm = window.confirm("would you like to travel to the highscore screen?")
    }
    if (counter >= questionsArray.length) {
        counter = 0
        console.log("quiz over")
        questionEl.innerHTML = "Quiz Over!"
        ul.innerHTML = "";
        clearInterval(timer)
        window.prompt("Input your initials for score keeping!")
        confirm = window.confirm("would you like to travel to the highscore screen?")
    } else {
        displayQuestion(counter)
    }
    if (confirm = true) {
        highscore
    }
}
var user = [{
    scoreLS: score.valueOf(),
    initialLS: initials,
    correctAnswerScoreLS: correctAnswerScore.valueOf(),
}];

function highscore() {
    var quiztitle = document.querySelector(".quiztitle")
    quiztitle.textContent = ""
    quiztitle.innerHTML = "Highscores"
    window.localStorage.setItem("user", JSON.stringify(user));
    var highscores = JSON.parse(localStorage.getItem("user"))

    document.querySelector('.answers').textContent = highscores
    console.log(user)
}
console.log(score)