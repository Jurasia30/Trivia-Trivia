
//First Step: Write fetch code for 5 different categories: Science and Nature(id:17), Music(id:12), Film(id:11), Math(id:19), Sports(id:21)

//Look up how to combine fetch requests: Promise.all()


//Film Fetch
fetch('https://opentdb.com/api.php?amount=20&category=11&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let questionsArray = questionsObject.results
    let image = document.querySelectorAll('.questions')
    Array.from(image).forEach((element) => {
        element.addEventListener('click', (event) => {
            console.log(event)
        })
    })
})

    // let questions = document.getElementById('trivia-display-name')
    // questions.innerHTML = hardQuestion(questionsObject)
    
    


function easyQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.find((element) => element.difficulty === "easy")
    return question.question
    
}

function mediumQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.filter((element) => element.difficulty ==="medium")
    console.log(question[0].question)
    console.log(question[1].question)
}

function hardQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.find((element) => element.difficulty === "hard" )
    return question.question
}

function submitAnswer(question) {
    let answerForm = document.getElementById('')
    let answerValue = document.getElementById('')
    answerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        if (answerValue.value.toLowerCase() === question.correct_answer.toLowerCase()) {
            console.log("Nice!")
        } else {
            console.log("You suck!")

        }
        
    })
}

function clickForQuestion(questionsObject) {
    let questionText = document.getElementById('trivia-display-name')
    let image = document.querySelectorAll('.questions')
    Array.from(image).forEach((element) => {
        element.addEventListener('click', (event) => {
            console.log(event)
        })
        
    })
}