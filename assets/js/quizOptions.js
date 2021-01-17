//TODO: I want this to just be a JSON file, but I cannot figure out how to load that into script.js
//TODO: could turn this into a quiz selector page.
//note that "correctAnswer" is an index of "answers"

//set a quiz to local storage. Default to dummyQuiz:
function loadQuiz(quiz){
    sessionStorage.setItem("loadedQuiz",JSON.stringify(quiz));
}

var dummyQuiz = {
    "Title":"DummyQuiz",
    "welcome":"Answer the following questions as fast as possible. A wrong answer will deduct 10 seconds! Click start to begin",
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
        },
        {
            "question":"question 3",
            "answers":["Answer one","Answer two","Answer three","Answer four"],
            "correctAnswer":1
        }]
}

var JSQuiz = {
    "Title":"Javascript Quiz",
    "welcome":"Answer the following questions about Javascript with the time limit. A wrong answer will deduct 10 seconds! Click start to begin",
    "questionList":
        [{
            "question":"Which of the following evaluate to false?",
            "answers":["0","null","undefined","all of the above"],
            "correctAnswer":3
        },
        {
            "question":"What will the following return: typeof('integer')",
            "answers":["integer","undefined","string","boolean"],
            "correctAnswer":2
        },
        {
            "question":"Which symbol is used to enclose objects?",
            "answers":["( )","{ }","[ ]","< >"],
            "correctAnswer":1
        },
        {
            "question":"What property returns the number of elements in an array?",
            "answers":["length","size","elements","depth"],
            "correctAnswer":0
        }]
}



//default
loadQuiz(JSQuiz);