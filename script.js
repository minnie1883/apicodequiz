const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is an array in coding?",
        choice1: "A rainbow collection of colors",
        choice2: "A set of codes in a path",
        choice3: "A data structure consisting of a collection of elements each identified by at least one array index or key",
        choice4: "A series of numbers",
        answer: 3,
    },
    {
        question: "What does API stand for?",
        choice1: "Association Pivet Index",
        choice2: "Application Point Information",
        choice3: "Application Programming Interface",
        choice4: "Animal Petting Index",
        answer: 3,
    },
    {
        question: "What is coding?",
        choice1: "Coding is how we communicate with computers",
        choice2: "Coding is a code word for awesome",
        choice3: "Coding is a robot",
        choice4: "A series of codes on a page",
        answer: 1,
    },
    {
        question: "What does var mean in coding?",
        choice1: "Vixen America Robot",
        choice2: "Var mean that something is cancelled out",
        choice3: "It means that a code is hidden",
        choice4: "The var statement declares a variable",
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("/end.html")
    }

    //questionCounter++
    //progressText.innerText = "Question ${questionCounter} of ${MAX_QUESTIONS}"
    //progressBarFull.style.width = "${(questionCouunter/MAX_QUESTIONS) * 100}%"

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
