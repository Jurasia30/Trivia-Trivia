
//First Step: Write fetch code for 5 different categories: Science and Nature(id:17), Music(id:12), Film(id:11), Math(id:19), Sports(id:21)

//Look up how to combine fetch requests: Promise.all()

//TODO Write basic outline of what is being populated in each column

//Film Fetch
fetch('https://opentdb.com/api.php?amount=20&category=11&type=multiple')
.then(resp => resp.json())
.then(questionsObject => {
    hardQuestion(questionsObject)
    
})


function easyQuestion(questionsObject) {
    let questionArray = questionsObject.results
    let question = questionArray.find((element) => element.difficulty === "easy")
    console.log(question.question)
    
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
    console.log(question.question)
}

function submitAnswer(question) {
    let answerForm = document.getElementById('')
    let answerValue = document.getElementById('')
    answerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        if (answerValue.value === question.correct_answer) {
            console.log("Nice!")
        } else {
            console.log("You suck!")

        }
        
    })
}

function clickForQuestion(questionsObject) {
    let questionText = document.getElementById('')
    let image = document.getElementsByClassName('questions')
    image.addEventListener('click', (event) => {
        let question = questionsObject.question
        document.questionText.append(question)
        
    })
}