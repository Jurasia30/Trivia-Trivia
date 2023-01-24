

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
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        submitAnswer(question)
    })
    let filmMed2 = document.getElementById('F-medium-2')
    filmMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        submitAnswer(question)
    })
    let filmHard = document.getElementById('F-hard')
    filmHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})

//Science and Nature Fetch
fetch('https://opentdb.com/api.php?amount=20&category=17&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let filmEasy = document.getElementById('SC-easy')
    filmEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let filmMed = document.getElementById('SC-medium')
    filmMed.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        submitAnswer(question)
    })
    let filmMed2 = document.getElementById('SC-medium-2')
    filmMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        submitAnswer(question)
    })
    let filmHard = document.getElementById('Sc-hard')
    filmHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})

//Music
fetch('https://opentdb.com/api.php?amount=20&category=12&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let filmEasy = document.getElementById('M-easy')
    filmEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let filmMed = document.getElementById('M-medium')
    filmMed.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        submitAnswer(question)
    })
    let filmMed2 = document.getElementById('M-medium-2')
    filmMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        submitAnswer(question)
    })
    let filmHard = document.getElementById('M-hard')
    filmHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})

//Math
fetch('https://opentdb.com/api.php?amount=20&category=19&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let filmEasy = document.getElementById('MA-easy')
    filmEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let filmMed = document.getElementById('MA-medium')
    filmMed.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        submitAnswer(question)
    })
    let filmMed2 = document.getElementById('MA-medium-2')
    filmMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        submitAnswer(question)
    })
    let filmHard = document.getElementById('MA-hard')
    filmHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})

//Sports
fetch('https://opentdb.com/api.php?amount=20&category=21&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let filmEasy = document.getElementById('S-easy')
    filmEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let filmMed = document.getElementById('S-medium')
    filmMed.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        submitAnswer(question)
    })
    let filmMed2 = document.getElementById('S-medium-2')
    filmMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        submitAnswer(question)
    })
    let filmHard = document.getElementById('S-hard')
    filmHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})


    


function easyQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.find((element) => element.difficulty === "easy")
    submitAnswer(question)
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
    submitAnswer(question)
    return question.question
}

function submitAnswer(question) {
    let answerForm = document.getElementById('bottom')
    answerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        if (event.target['trivia-name-input'].value.toLowerCase() === question.correct_answer.toLowerCase()) {
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


const easyQuestions = document.querySelectorAll("[id$='easy']")

easyQuestions.forEach(question => {
    question.textContent = 100;
})

const mediumQuestions = document.querySelectorAll("[id$='medium']")

mediumQuestions.forEach(question => {
    question.textContent = 200;
})


const mediumQuestionsTwo = document.querySelectorAll("[id$='medium-2']")

mediumQuestionsTwo.forEach(question => {
    question.textContent = 300;
})

const hardQuestions = document.querySelectorAll("[id$='hard']")

hardQuestions.forEach(question => {
    question.textContent = 400;
})

