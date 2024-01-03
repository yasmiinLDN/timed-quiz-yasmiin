// PSEUDOCODE FOR QUIZ
/// starter code (29th Dec) -- test in index !

let timerEl = document.getElementById("time")
let startScreen = document.getElementById("start-screen")
const startBtn = document.getElementById("start")
const questions = document.getElementById("questions")
const questionTitle = document.getElementById("question-title")
const questionChoices = document.getElementById("choices")
const endScreen = document.getElementById("end-screen")
const finalScore = document.getElementById("final-score")
const initials = document.getElementById("initials")
const submitBtn = document.getElementById("submit")
const feedbackEl = document.getElementById("feedback")

// Set of questionQuiz --> array of objects
// Each question needs the following:
// Question text
// Set of answers
// Which answer is correct

let questionQuiz = [
    {
        qTitle: "1) Commonly used data types DO NOT include",
        choices: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        answer: "B. Booleans",
    },
    {
        qTitle: "2) The condition in an if/else statement is enclosed within _____.",
        choices: ["A. Quotes", "B. Curly brackets", "C. Parentheses", "D. Square brackets"],
        answer: "C. Parentheses",
    },
    {
        qTitle: "3) Arrays in JavaScript can be used to store ____.",
        choices: ["A. Numbers and strings", "B. Other arrays", "C. Booleans", "D. All of the above"],
        answer: "D. All of the above",
    },
    {
        qTitle: "4) String values must be enclosed within ______ when being assigned to variables",
        choices: ["A. Commas", "B. Curly brackets", "C. Quotes", "D. Parentheses"],
        answer: "B. Curly brackets",
    },
    {
        qTitle: "5) A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["A. Javascript", "B. Terminal/Bash", "C. For loops", "D. Console.log"],
        answer: "C. For loops",
    }
]

// Landing page:
// Explanation of the quiz
// Start button

// Click the start button:
// Landing page goes away (can be done with CSS --> questions have a class of "hide")
// Timer starts (NEED a conditional in there to check whether the answer was correct, which means you need to track whether the answer was correct).
// The first question appears (with its answers)

let timerInterval;
let questionIndex = 0
let timer = questionQuiz.length * 15

function startQuiz() {
    startScreen.classList.add("hide")
    questions.classList.remove("hide")
    timerInterval = setInterval(function () {
        timer--
        timerEl.textContent = timer

        if (timer <= 0) {
            endQuiz()
        }
    }, 1000)

getQuestions();
    
}

function getQuestions() {
    let currentQuestion = questionQuiz[questionIndex]
console.log(currentQuestion);
    questionTitle.textContent = currentQuestion.qTitle
    questionChoices.innerHTML = '';
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choice = currentQuestion.choices[i];
        let choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = choice
        choiceBtn.onclick = selectAnswer
        // onclick works similarly to addEventListener but prevent potential bugginess of addEventListener when used in for loop 

        questionChoices.appendChild(choiceBtn)
    }
}

// For each question:
// User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

function selectAnswer(event) {
    if (event.target.value !== questionQuiz[questionIndex].answer) {
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

    if (questionIndex === questionQuiz.length) {
        endQuiz()
    } else {
        getQuestions()
    }

}

// After the last question:
// Timer stops
// Question disappears
// Form appears for user to enter their initials
// Display their score

function endQuiz() {
    clearInterval(timerInterval)
    questions.setAttribute("class", "hide")
    endScreen.removeAttribute("class")
}

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again


/// STORE INITIALS
/// STORE SCORE


// button starts the quiz
startBtn.addEventListener('click', startQuiz);