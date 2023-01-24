
//First Step: Write fetch code for 5 different categories: Science and Nature(id:17), Music(id:12), Film(id:11), Math(id:19), Sports(id:21)

//Look up how to combine fetch requests: Promise.all()


//Film Fetch
fetch('https://opentdb.com/api.php?amount=20&category=11&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let filmEasy = document.getElementById('F-easy')
    filmEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let filmMed = document.getElementById('F-medium')
    filmMed.addEventListener('click', (e) => {
        h2.innerHTML = (mediumQuestion(questionsObject)[0].question)
    })
    let filmMed2 = document.getElementById('F-medium2')
    filmMed2.addEventListener('click', (e) => {
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
    })
    let filmHard = document.getElementById('F-hard')
    filmHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
    
})

function clickForQuestion(questionsObject) {
    let image = document.querySelectorAll('.questions')
    Array.from(image).forEach((element) => {
        element.addEventListener('click', (event) => {
            let question = questionsObject.question
            h2.innerHTML = question
        })
        
    })
}
    


function easyQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.find((element) => element.difficulty === "easy")
    return question.question
    
}

function mediumQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.filter((element) => element.difficulty ==="medium")
    return question
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


//Question Display
const h2 = document.createElement('h2')
h2.textContent = ""
document.getElementById('trivia-display').append(h2)