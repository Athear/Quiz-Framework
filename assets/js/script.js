//Select which quiz is going to be active:
var currentQuiz = dummyQuiz
console.log(currentQuiz);//DEBUG

//HTML elements
var questionPane =$("#question-pane");
var greetingPane =$("#greeting-pane");

//Quiz components
var questionNumber = 1;
var quizName = currentQuiz.Title
console.log(quizName);
console.log(currentQuiz.questionList[1].question)

var currentClass = questionPane.attr("class");
// questionPane.attr("class",currentClass+" hidden");


function startQuiz(){
    //console.log("i got called")//DEBUG
    questionNumber =0; 
    loadQuestion();
    greetingPane.attr("class","hidden");
    questionPane.attr("class","row");
    
}

function answerClicked(which){
    console.log(which)
    //load next question
}

function loadQuestion(){
    //TODO: consider using .shift instead of iteraing
    var currentQuestion= currentQuiz.questionList[questionNumber];
    $("#question-header").text(currentQuestion.question);
    $("#answer-btn-0").text(currentQuestion.answers[0]);
    $("#answer-btn-1").text(currentQuestion.answers[1]);
    $("#answer-btn-2").text(currentQuestion.answers[2]);
    $("#answer-btn-3").text(currentQuestion.answers[3]);
}

//Click listers for buttons
$("#startButton").on("click", startQuiz)

// TODO - is there a better way to handle this?
$("#answer-btn-0").on("click", function(){answerClicked(0)});
$("#answer-btn-1").on("click", function(){answerClicked(1)});
$("#answer-btn-2").on("click", function(){answerClicked(2)});
$("#answer-btn-3").on("click", function(){answerClicked(3)});


// var start = document.querySelector("#startButton");
// start.addEventListener("click",startQuiz)