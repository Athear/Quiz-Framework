//TODO: I want this to just be a JSON file, but I cannot figure out how to load that into script.js
//TODO: could turn this into a quiz selector page.
//note that "correctAnswer" is an index of "answers"

//set a quiz to local storage. Default to dummyQuiz:
function loadQuiz(quiz){
    sessionStorage.setItem("loadedQuiz",JSON.stringify(quiz));
}

var dummyQuiz = {
    "Title":"DummyQuiz",
    "welcome":"please take this garbage quiz!",
    "questionList":
        [{
            "question":"first actual question",
            "answers":["firstAnswer","secondAnswer","thirdAnswer","fourthAnswer"],
            "correctAnswer":0
        },
        {
            "question":"second question",
            "answers":["Answer1","Answer2","Answer3","Answer4"],
            "correctAnswer":2
        }]
}


//default
loadQuiz(dummyQuiz);