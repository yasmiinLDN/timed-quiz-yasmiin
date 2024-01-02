/// starter code (29th Dec) -- test in index !


let timerEl = document.getElementById("time")
let startScreen = documen.getElementById("start-screen")
const startBtn = document.getElementById("start")
const questionTitle = document.getElementById("question-title")
const questionChoices = document.getElementById("choices")
const endScreen = document.getElementById("end-screen")
const finalScore = document.getElementById("final-score")
const initials = document.getElementById("initals")
const submitBtn = document.getElementById("submit")
const feedbackEl = document.getElementById("feedback")


let questions = [
    {
        title: "First Question",
        choices: "ChoiceA, ChoiceB, ChoiceC",
        answer: "ChoiceB",
    },
    {
        title: "First Question",
        choices: "ChoiceA, ChoiceB, ChoiceC",
        answer: "ChoiceB",
    },
    {
        title: "First Question",
        choices: "ChoiceA, ChoiceB, ChoiceC",
        answer: "ChoiceB",
    },
    {
        title: "First Question",
        choices: "ChoiceA, ChoiceB, ChoiceC",
        answer: "ChoiceB",
    },
    {
        title: "First Question",
        choices: "ChoiceA, ChoiceB, ChoiceC",
        answer: "ChoiceB",
    }
]

let timerInterval;
let questionIndex = 0
let timer = questions.length * 15

function startQuiz() {
    startScreen.setAttribute("class", "hide")
    questions.removeAttribute("class")
    timerInterval = setInterval(function () {
        timer--
        timerEl.textcontent = timer

        if (timer <= 0) {
            endQuiz()
        }
    }, 1000)


}

function getQuestions() {
    let currentQuestion = questions[questionIndex]

    titilEl.textcontent = currentQuestion.title

    for (let i = 0; i < currentQuestion.length; i++) {
        const choice = currentQuestion.choices[i];
        let choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = choice
        choiceBtn.addEventListener("click", selectAnswer)

        questionChoices.appendChild(choiceBtn)
    }
}
function selectAnswer(event) {
    if (event.target.value !== questions[questionIndex].answer) {
        timer -= 15
        if (timer < 0) {
            timer = 0
        }

        timerEl.textContent = timer
        feedbackEl.textContent = "Wrong Answer!"
    }
    else {
        feedbackEl.textContent = "Correct Answer"
    }

    feedbackEl.setAttribute("class", "feedback")
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide")
    }, 1000)

    questionIndex++

    if (questionIndex === questions.length) {
        endQuiz()
    } else {
        getQuestions()
    }

}

function endQuiz() {
    clearInterval(timerInterval)
    questions.setAttribute("class", "hide")
    endScreen.removeAttribute("class")
}