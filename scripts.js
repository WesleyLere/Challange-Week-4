var startbutton = document.querySelector('#startbutton')
var quizEl = document.querySelector('#quiz')
var questionEl = document.createElement("h2")

var ul = document.querySelector(".answers")
var counter= 0
var questionsArray = [
    {
        question: "first question",
        answers: ["cheese", "apple", "banana", "burger"],
        correctAnswer: "apple"
    }, {
        question: "second question",
        answers: ["cheese", "apple", "banana", "burger"],
        correctAnswer: "apple"
    }, {
        question: "third question",
        answers: ["cheese", "apple", "banana", "burger"],
        correctAnswer: "apple"
    }, {
        question: "fourth question",
        answers: ["cheese", "apple", "banana", "burger"],
        correctAnswer: "apple"
    },
]

startbutton.addEventListener("click", function () {

    startbutton.style.display = "none";

    quizEl.appendChild(questionEl);

    for (let i = 0; i < questionsArray.length; i++) {
        questionEl.textContent = questionsArray[i].question;
        var userAnswers = questionsArray[i].answers

    }
    userAnswers.forEach(function (nextQuestion) {
        var answersEl = document.createElement('li')
        answersEl.textContent = nextQuestion;
        ul.appendChild(answersEl)
        answersEl.addEventListener("click", function (event) {
            let element = event.target
            if (element.matches("li")) {
                if (element.textContent == questionsArray[counter].correctAnswer) {
                    console.log("correct")
                } else {
                    console.log("wrong")
                }     counter++
            }
        })
    })


});