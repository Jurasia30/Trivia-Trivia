

//Film Fetch
fetch('https://opentdb.com/api.php?amount=20&category=11&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let filmEasy = document.getElementById('F-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    mouseOver(filmEasy)
    filmEasy.addEventListener('click', (e) => {
        renderAnswer(easy)
        h2.innerHTML = easy.question
        allowForm(answerForm)
        crosses(filmEasy)
    }, {once : true})
    let filmMed = document.getElementById('F-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    mouseOver(filmMed)
    filmMed.addEventListener('click', (e) => {
        renderAnswer(question)
        h2.innerHTML = (question.question)
        question.points = 200
        allowForm(answerForm)
        crosses(filmMed)
    }, {once : true})
    let filmMed2 = document.getElementById('F-medium-2')
    let med = mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    mouseOver(filmMed2)
    filmMed2.addEventListener('click', (e) => {
        renderAnswer(med)
        h2.innerHTML = (med.question)
        med.points = 300
        allowForm(answerForm)
        crosses(filmMed2)
    }, {once : true})
    let filmHard = document.getElementById('F-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    mouseOver(filmHard)
    filmHard.addEventListener('click', (e) => {
        renderAnswer(hard)
        h2.innerHTML = hard.question
        allowForm(answerForm)
        crosses(filmHard)
    }, {once : true})
    
})

//Science and Nature Fetch
fetch('https://opentdb.com/api.php?amount=20&category=17&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let scienceEasy = document.getElementById('SC-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    mouseOver(scienceEasy)
    scienceEasy.addEventListener('click', (e) => {
        renderAnswer(easy)
        h2.innerHTML = easy.question
        allowForm(answerForm)
        crosses(scienceEasy)
    }, {once : true})
    let scienceMed = document.getElementById('SC-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    mouseOver(scienceMed)
    scienceMed.addEventListener('click', (e) => {
        renderAnswer(question)
        h2.innerHTML = (question.question)
        question.points = 200
        allowForm(answerForm)
        crosses(scienceMed)
    }, {once : true})
    let scienceMed2 = document.getElementById('SC-medium-2')
    let med = mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    mouseOver(scienceMed2)
    scienceMed2.addEventListener('click', (e) => {
        renderAnswer(med)
        h2.innerHTML = (med.question)
        med.points = 300
        allowForm(answerForm)
        crosses(scienceMed2)
    }, {once : true})
    let scienceHard = document.getElementById('Sc-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    mouseOver(scienceHard)
    scienceHard.addEventListener('click', (e) => {
        renderAnswer(hard)
        h2.innerHTML = hard.question
        allowForm(answerForm)
        crosses(scienceHard)
    }, {once : true})
    
})

//Music
fetch('https://opentdb.com/api.php?amount=20&category=12&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let musicEasy = document.getElementById('M-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    mouseOver(musicEasy)
    musicEasy.addEventListener('click', (e) => {
        renderAnswer(easy)
        h2.innerHTML = easy.question
        allowForm(answerForm)
        crosses(musicEasy)
    }, {once : true})
    let musicMed = document.getElementById('M-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    mouseOver(musicMed)
    musicMed.addEventListener('click', (e) => {
        renderAnswer(question)
        question.points = 200
        h2.innerHTML = (question.question)
        allowForm(answerForm)
        crosses(musicMed)
    }, {once : true})
    let musicMed2 = document.getElementById('M-medium-2')
    let med = mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    mouseOver(musicMed2)
    musicMed2.addEventListener('click', (e) => {
        renderAnswer(med)
        h2.innerHTML = (med.question)
        med.points = 300
        allowForm(answerForm)
        crosses(musicMed2)
    }, {once : true})
    let musicHard = document.getElementById('M-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    mouseOver(musicHard)
    musicHard.addEventListener('click', (e) => {
        renderAnswer(hard)
        h2.innerHTML = hard.question
        allowForm(answerForm)
        crosses(musicHard)
    }, {once : true})
    
})

//Math
fetch('https://opentdb.com/api.php?amount=20&category=19&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let mathEasy = document.getElementById('MA-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    mouseOver(mathEasy)
    mathEasy.addEventListener('click', (e) => {
        renderAnswer(easy)
        h2.innerHTML = easy.question
        allowForm(answerForm)
        crosses(mathEasy)
    }, {once : true})
    let mathMed = document.getElementById('MA-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    mouseOver(mathMed)
    mathMed.addEventListener('click', (e) => {
        renderAnswer(question)
        h2.innerHTML = (question.question)
        question.points = 200
        allowForm(answerForm)
        crosses(mathMed)
    }, {once : true})
    let mathMed2 = document.getElementById('MA-medium-2')
    let med= mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    mouseOver(mathMed2)
    mathMed2.addEventListener('click', (e) => {
        renderAnswer(med)
        h2.innerHTML = (med.question)
        med.points = 300
        allowForm(answerForm)
        crosses(mathMed2)
    }, {once : true})
    let mathHard = document.getElementById('MA-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    mouseOver(mathHard)
    mathHard.addEventListener('click', (e) => {
        renderAnswer(hard)
        h2.innerHTML = hard.question
        allowForm(answerForm)
        crosses(mathHard)
    }, {once : true})
    
})

//Sports
fetch('https://opentdb.com/api.php?amount=20&category=21&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    
    let sportsEasy = document.getElementById('S-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    mouseOver(sportsEasy)
    sportsEasy.addEventListener('click', (e) => {
        renderAnswer(easy)
        h2.innerHTML = easy.question
        allowForm(answerForm)
        crosses(sportsEasy)
    }, {once : true})
    
    let sportsMed = document.getElementById('S-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    mouseOver(sportsMed)
    sportsMed.addEventListener('click', (e) => {
        renderAnswer(question)
        h2.innerHTML = (question.question)
        question.points = 200
        allowForm(answerForm)
        crosses(sportsMed)
    }, {once : true})
    
    let sportsMed2 = document.getElementById('S-medium-2')
    let med = mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    mouseOver(sportsMed2)
    sportsMed2.addEventListener('click', (e) => {
        renderAnswer(med)
        h2.innerHTML = (med.question)
        question.points = 300
        allowForm(answerForm)
        crosses(sportsMed2)
    }, {once : true})
    let sportsHard = document.getElementById('S-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    mouseOver(sportsHard)
    sportsHard.addEventListener('click', (e) => {
        renderAnswer(hard)
        h2.innerHTML = hard.question
        allowForm(answerForm)
        crosses(sportsHard)
    }, {once : true})
    
})



function easyQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.find((element) => element.difficulty === "easy")
    question.points = 100
    return question
    
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
    return question
}

const answerForm = document.getElementById('bottom')
function submitAnswer(question) {
    answerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const totalScore = document.querySelector('#ScoreAmount')
        const playerInput = event.target['trivia-name-input'].value.toLowerCase()
        const correctAnswer = question.correct_answer.toLowerCase()
        if (playerInput === correctAnswer) {

            switch(question.difficulty) {
                case 'easy':
                totalScore.textContent = parseInt(totalScore.textContent) + 100;
                break;

                case 'medium':
                if(question.points === 300) {
                totalScore.textContent = parseInt(totalScore.textContent) + 300;
                }
                if (question.points === 200) {
                totalScore.textContent = parseInt(totalScore.textContent) + 200
                }
                break;

                case 'hard':
                totalScore.textContent = parseInt(totalScore.textContent) + 400;
                break;
             }
            
           
    
        }

        answerForm.reset()
        stopForm(answerForm)   
    }    
    )} 



//Question Display
const h2 = document.createElement('h2')
const ul = document.createElement('ul')
h2.textContent = ""
document.getElementById('trivia-display').append(h2, ul)

//Render Answers
function renderAnswer(questionObject) {
    ul.innerHTML = ""
    let incorrectAns = questionObject.incorrect_answers
    incorrectAns.push(questionObject.correct_answer)
    let randomAns = randomizeAns(incorrectAns)
    for (answer of randomAns) {
        let li = document.createElement('li')
        li.innerHTML = answer
        ul.appendChild(li)
    }  
}

//Randomize Answers
function randomizeAns(ansArray){
    let i = ansArray.length
    let j = 0
    let temp
    
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = ansArray[i];
        ansArray[i] = ansArray[j];
        ansArray[j] = temp;
     }
    
        return ansArray; 
}

//Stop Submit Function
function stopForm(form) {
        form.button.disabled = true;
        return true
}

//Allow Submit Function
function allowForm(form) {
    form.button.disabled = false;
    return false
}

//Red "X's" Function
function crosses (div) {
    div.textContent = 'x'
    lineOne = document.createElement('h1')
    lineOne.classList.add('diagnolLineOne');
    div.append(lineOne);
    lineTwo = document.createElement('h1')
    lineTwo.classList.add('diagnolLineTwo');
    div.append(lineTwo)
}


//Mouseover Function
function mouseOver(div) {
   
    div.addEventListener('mouseenter', (event) => {
        div.classList.replace("questions", "questions-color")
    })
    div.addEventListener('mouseleave', (event) => {
        div.classList.replace("questions-color", "questions")
    })
}


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




