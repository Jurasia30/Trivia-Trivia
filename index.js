function easyQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.find((element) => element.difficulty === "easy")
    question.points = 100
    return question
    
}

function submitAnswer(question) {
    let answerForm = document.getElementById('bottom')
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
            answerForm.reset()
        }
        
    }    
    )} 
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
    



//Science and Nature Fetch
fetch('https://opentdb.com/api.php?amount=20&category=17&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let scienceEasy = document.getElementById('SC-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    scienceEasy.addEventListener('click', (e) => {
        badAnswer(easy)
        crosses(scienceEasy)
    })

    let scienceMed = document.getElementById('SC-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    scienceMed.addEventListener('click', (e) => {
        badAnswer(question)
        h2.innerHTML = (question.question)
        question.points = 200
        crosses(scienceMed)
    let scienceMed2 = document.getElementById('SC-medium-2')
    let med = mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    scienceMed2.addEventListener('click', (e) => {
        badAnswer(med)
        h2.innerHTML = (med.question)
        med.points = 300
        crosses(scienceMed2)
        
    })
    let scienceHard = document.getElementById('Sc-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    scienceHard.addEventListener('click', (e) => {
        badAnswer(hard)
        h2.innerHTML = hard.question
        crosses(scienceHard)
    })
    
})


//Music
fetch('https://opentdb.com/api.php?amount=20&category=12&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let musicEasy = document.getElementById('M-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    musicEasy.addEventListener('click', (e) => {
        badAnswer(easy)
        h2.innerHTML = easy.question
        crosses(musicEasy)
    })
    let musicMed = document.getElementById('M-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    musicMed.addEventListener('click', (e) => {
        badAnswer(question)
        question.points = 200
        h2.innerHTML = (question.question)
        crosses(musicMed)
    
        
    })
    let musicMed2 = document.getElementById('M-medium-2')
    let med = mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    musicMed2.addEventListener('click', (e) => {
        badAnswer(med)
        h2.innerHTML = (med.question)
        med.points = 300
        crosses(musicMed2)
       
        
    })
    let musicHard = document.getElementById('M-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    musicHard.addEventListener('click', (e) => {
        badAnswer(hard)
        h2.innerHTML = hard.question
        crosses(musicHard)
        
    })
    
})

//Math
fetch('https://opentdb.com/api.php?amount=20&category=19&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let mathEasy = document.getElementById('MA-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    mathEasy.addEventListener('click', (e) => {
        badAnswer(easy)
        h2.innerHTML = easy.question
        crosses(mathEasy)
    })

    let mathMed = document.getElementById('MA-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    mathMed.addEventListener('click', (e) => {
        badAnswer(question)
        h2.innerHTML = (question.question)
        question.points = 200
        crosses(mathMed)
    })
    let mathMed2 = document.getElementById('MA-medium-2')
    let med= mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    mathMed2.addEventListener('click', (e) => {
        badAnswer(med)
        h2.innerHTML = (med.question)
        med.points = 300
        crosses(mathMed2)
    })
    let mathHard = document.getElementById('MA-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    mathHard.addEventListener('click', (e) => {
        badAnswer(hard)
        h2.innerHTML = hard.question
        crosses(mathHard)
    })
    
})

//Sports
fetch('https://opentdb.com/api.php?amount=20&category=21&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    
    let sportsEasy = document.getElementById('S-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    sportsEasy.addEventListener('click', (e) => {
        badAnswer(easy)
        h2.innerHTML = easy.question
        crosses(sportsEasy)
    })
    
    let sportsMed = document.getElementById('S-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    sportsMed.addEventListener('click', (e) => {
        badAnswer(question)
        h2.innerHTML = (question.question)
        question.points = 200
        crosses(sportsMed)
    })
    
    let sportsMed2 = document.getElementById('S-medium-2')
    let med = mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    sportsMed2.addEventListener('click', (e) => {
        badAnswer(med)
        h2.innerHTML = (med.question)
        question.points = 300
        crosses(sportsMed2)
    })
    let sportsHard = document.getElementById('S-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    sportsHard.addEventListener('click', (e) => {
        badAnswer(hard)
        h2.innerHTML = hard.question
        crosses(sportsHard)
    })
    
})












//Question Display
const h2 = document.createElement('h2')
const ul = document.createElement('ul')
h2.style.color = "purple";
h2.style.position = "relative"
h2.style.fontSize = "30px";
h2.style.top = "-100px"
h2.textContent = "";
ul.style.position = "relative";
ul.style.fontSize = "30px";
ul.style["text-align"] = "left";
ul.style.top = "-125px"


document.getElementById('trivia-display').append(h2, ul)

//Render Incorrect Answers
function badAnswer(questionObject) {
    ul.innerHTML = ""
    let incorrectAns = questionObject.incorrect_answers
    for (incorrect of incorrectAns) {
        let li = document.createElement('li')
        li.innerHTML = incorrect
        ul.appendChild(li)
    }
    let li2 = document.createElement('li')
    li2.innerHTML = questionObject.correct_answer
    ul.appendChild(li2)

    
}

function crosses (div) {

        lineOne = document.createElement('h1')
        lineOne.classList.add('diagnolLineOne');
        div.append(lineOne);
        lineTwo = document.createElement('h1')
        lineTwo.classList.add('diagnolLineTwo');
        div.append(lineTwo)
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
})//})

//Film Fetch
fetch('https://opentdb.com/api.php?amount=20&category=11&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    let filmEasy = document.getElementById('F-easy')
    let easy = easyQuestion(questionsObject)
    submitAnswer(easy)
    filmEasy.addEventListener('click', (e) => {
        badAnswer(easy)
        h2.innerHTML = easy.question
        crosses(filmEasy)


    })
    let filmMed = document.getElementById('F-medium')
    let question = mediumQuestion(questionsObject)[0]
    submitAnswer(question)
    filmMed.addEventListener('click', (e) => {
        badAnswer(question)
        h2.innerHTML = (question.question)
        question.points = 200
        crosses(filmMed)

    })
    let filmMed2 = document.getElementById('F-medium-2')
    let med = mediumQuestion(questionsObject)[1]
    submitAnswer(med)
    filmMed2.addEventListener('click', (e) => {
        badAnswer(med)
        h2.innerHTML = (med.question)
        med.points = 300
        crosses(filmMed2)
    })
    let filmHard = document.getElementById('F-hard')
    let hard = hardQuestion(questionsObject)
    submitAnswer(hard)
    filmHard.addEventListener('click', (e) => {
        badAnswer(hard)
        h2.innerHTML = hard.question
        crosses(filmHard)
    })
    
})})
