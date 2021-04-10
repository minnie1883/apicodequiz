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
