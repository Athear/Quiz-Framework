//Select which quiz is going to be active:
var currentQuiz = dummyQuiz

console.log(currentQuiz);

var questionPane =$("#question-pane");
var greetingPane =$("#greeting-pane");

var currentClass = questionPane.attr("class");
// questionPane.attr("class",currentClass+" hidden");


function startQuiz(){
    console.log("i got called")
    greetingPane.attr("class","hidden");
    questionPane.attr("class","row");
}

function answerClicked(which){
    console.log(which)
    //load next question
}


//Click listers for buttons
$("#startButton").on("click", startQuiz)

// TODO - is there a better way to handle this?
$("#answer-btn-1").on("click", function(){answerClicked(1)});
$("#answer-btn-2").on("click", function(){answerClicked(2)})
$("#answer-btn-3").on("click", function(){answerClicked(3)})
$("#answer-btn-4").on("click", function(){answerClicked(4)})


// var start = document.querySelector("#startButton");
// start.addEventListener("click",startQuiz)