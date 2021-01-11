var questionPane =$("#question-pane");
var greetingPane =$("#greeting-pane");

var currentClass = questionPane.attr("class");
questionPane.attr("class",currentClass+" hidden");


function startQuiz(){
    console.log("i got called")
    greetingPane.attr("class","hidden");
    questionPane.attr("class","row");
}


$("#startButton").on("click", startQuiz)

// var start = document.querySelector("#startButton");
// start.addEventListener("click",startQuiz)