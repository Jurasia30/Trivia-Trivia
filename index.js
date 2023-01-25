

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
        question.points = 200
        submitAnswer(question)
    })
    let filmMed2 = document.getElementById('F-medium-2')
    filmMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        question.points = 300
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
    let scienceEasy = document.getElementById('SC-easy')
    scienceEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let scienceMed = document.getElementById('SC-medium')
    scienceMed.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        question.points = 200
        submitAnswer(question)
    })
    let scienceMed2 = document.getElementById('SC-medium-2')
    scienceMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        question.points = 300
        submitAnswer(question)
    })
    let scienceHard = document.getElementById('Sc-hard')
    scienceHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})

//Music
fetch('https://opentdb.com/api.php?amount=20&category=12&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let musicEasy = document.getElementById('M-easy')
    musicEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let musicMed = document.getElementById('M-medium')
    musicMed.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        question.points = 200
        submitAnswer(question)
    })
    let musicMed2 = document.getElementById('M-medium-2')
    musicMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        question.points = 300
        submitAnswer(question)
    })
    let musicHard = document.getElementById('M-hard')
    musicHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})

//Math
fetch('https://opentdb.com/api.php?amount=20&category=19&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let mathEasy = document.getElementById('MA-easy')
    mathEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let mathMed = document.getElementById('MA-medium')
    mathMed.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        question.points = 200
        submitAnswer(question)
    })
    let mathMed2 = document.getElementById('MA-medium-2')
    mathMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        question.points = 300
        submitAnswer(question)
    })
    let mathHard = document.getElementById('MA-hard')
    mathHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})

//Sports
fetch('https://opentdb.com/api.php?amount=20&category=21&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let sportsEasy = document.getElementById('S-easy')
    sportsEasy.addEventListener('click', (e) => {
        h2.innerHTML = easyQuestion(questionsObject)
    })
    let sportsMed = document.getElementById('S-medium')
    sportsMed.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[0]
        h2.innerHTML = (question.question)
        question.points = 200
        submitAnswer(question)
    })
    let sportsMed2 = document.getElementById('S-medium-2')
    sportsMed2.addEventListener('click', (e) => {
        let question = mediumQuestion(questionsObject)[1]
        h2.innerHTML = (mediumQuestion(questionsObject)[1].question)
        question.points = 300
        submitAnswer(question)
    })
    let sportsHard = document.getElementById('S-hard')
    sportsHard.addEventListener('click', (e) => {
        h2.innerHTML = hardQuestion(questionsObject)
    })
    
})



function easyQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.find((element) => element.difficulty === "easy")
    question.points = 100
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
    question.points = 400
    submitAnswer(question)
    return question.question
}

function submitAnswer(question) {
    let answerForm = document.getElementById('bottom')
    answerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        if (event.target['trivia-name-input'].value.toLowerCase() === question.correct_answer.toLowerCase()) {
            console.log(question.points)
            
        } else {
            console.log(question.points)
            
        }
        answerForm.reset()
        
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

