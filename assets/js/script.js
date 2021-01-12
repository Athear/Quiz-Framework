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

//declare global quizTimer
var quizTimer;
var quizCountdown = 72;

function startQuiz(){
    //console.log("i got called")//DEBUG
    questionNumber =0; 
    quizCountdown = 72;
    loadQuestion();
    $("#greeting-pane").attr("class","row hidden");
    $("#question-pane").attr("class","row");
    $("#timer").text(quizCountdown)

    quizTimer = setInterval(function(){
        quizCountdown--
        if(quizCountdown>0){
           $("#timer").text(quizCountdown);
        }else{
            quizCountdown=0
            $("#timer").text(quizCountdown);
            stopQuiz();
        }
    },1000)
}

function stopQuiz(){
    clearInterval(quizTimer);
    $("#question-pane").attr("class","row hidden");
    $("#complete-pane").attr("class","row")
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


//Click listers for buttons
$("#startButton").on("click", startQuiz)

// TODO - is there a better way to handle this? for loop didn't quite work. Possibly try data-id attributes. would need to get target of event
$("#answer-btn-0").on("click", function(){answerClicked(0)});
$("#answer-btn-1").on("click", function(){answerClicked(1)});
$("#answer-btn-2").on("click", function(){answerClicked(2)});
$("#answer-btn-3").on("click", function(){answerClicked(3)});
