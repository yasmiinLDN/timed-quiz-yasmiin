// PSEUDOCODE FOR QUIZ

// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

// Landing page:
  // Explanation of the quiz
  // Start button

// Click the start button:
  // Landing page goes away
  // Timer starts (NEED a conditional in there to check whether the answer was correct, which means you need to track whether the answer was correct).
  // The first question appears (with its answers)

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again
  

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