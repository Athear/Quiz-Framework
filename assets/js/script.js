//Get the loaded quiz
var currentQuiz = JSON.parse(sessionStorage.getItem("loadedQuiz"))
console.log(currentQuiz);//DEBUG

//HTML elements
var questionPane =$("#question-pane");
var greetingPane =$("#greeting-pane");
var completePane =$("#complete-pane");

//Quiz components
//TODO: update greeting pane with quiz title and welcome blurb
var questionNumber = 1;
var quizName = currentQuiz.Title
console.log(quizName);


function startQuiz(){
    //console.log("i got called")//DEBUG
    questionNumber =0; 
    loadQuestion();
    $("#greeting-pane").attr("class","row hidden");
    $("#question-pane").attr("class","row");
    


}

function loadQuestion(){
    //TODO: consider using .shift instead of iteraing

    var currentQuestion= currentQuiz.questionList[questionNumber];
    $("#question-header").text(currentQuestion.question);

    for(var i=0; i<4;i++){
        $("#answer-btn-"+i).text(currentQuestion.answers[i]);
    }
}

function answerClicked(which){
    console.log(which); //DEBUG
    console.log(currentQuiz.questionList[questionNumber].correctAnswer); //DEBUG
    console.log(which===currentQuiz.questionList[questionNumber].correctAnswer); //DEBUG
    if(which===currentQuiz.questionList[questionNumber].correctAnswer){
        $("#answer-valid-alert").text("You got it!");
    }
    else{
        $("#answer-valid-alert").text("WRONG");
    }

    //Flash whether the answer was correct or not
    $("#answer-pane").attr("class","");
    var validationVisible = setTimeout(function(){
        $("#answer-pane").attr("class","hidden");
    },700);

    questionNumber++
    if(questionNumber<currentQuiz.questionList.length){
        loadQuestion();
    }else{
        stopQuiz();
    }
}


function stopQuiz(){
    $("#question-pane").attr("class","row hidden");
    $("#complete-pane").attr("class","row")
}


//Click listers for buttons
$("#startButton").on("click", startQuiz)

// TODO - is there a better way to handle this? for loop didn't quite work. Possibly try data-id attributes. would need to get target of event
$("#answer-btn-0").on("click", function(){answerClicked(0)});
$("#answer-btn-1").on("click", function(){answerClicked(1)});
$("#answer-btn-2").on("click", function(){answerClicked(2)});
$("#answer-btn-3").on("click", function(){answerClicked(3)});


// var start = document.querySelector("#startButton");
// start.addEventListener("click",startQuiz)