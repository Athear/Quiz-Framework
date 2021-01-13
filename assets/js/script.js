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

    if(quizCountdown===0){
        $("#complete-header").text("Out of Time!")
    }
    $("#complete-score").text(quizCountdown);
    $("#question-pane").attr("class","row hidden");
    $("#complete-pane").attr("class","row")
}

function loadQuestion(){
    //TODO: consider using .shift instead of iteraing
    var currentQuestion= currentQuiz.questionList[questionNumber];
    var answerButtons = $(".answer-btn")
    $("#question-header").text(currentQuestion.question);

    for(var i=0; i<4;i++){
        answerButtons[i].textContent = currentQuestion.answers[i];
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

function submitScore(event){
    event.preventDefault(); //DEBUG
    console.log("submit score!"); //DEBUG
    var scoreObj;
    //test if local storage exists. Make an empty object if not
    if(!localStorage.getItem("quizScores")){
        scoreobj={}
    }else{
        scoreObj=JSON.parse(localStorage.getItem("quizScores"));
    }
    console.log(scoreObj);
    scoreObj[$("#score-input").val()]=quizCountdown;
    conssole.log("got here");
    // {
    //     "name":$("#score-input").val(),
    //     "score":quizCountdown
    // }
    //TODO: This needs to be in local storage. How do I do that?
    //TODO: don't let them submit if score = 0
    alert("congratulations "+scoreObj.name+"! Your score is "+scoreObj.score)
    localStorage.setItem("quizScores",JSON.stringify(scoreObj));
}

//Click listers for buttons
$("#startButton").on("click", startQuiz);
$("#score-btn").on("click", submitScore);

$(".answer-btn").on("click", function(){
    console.log($(this).attr("data-btn-id"));
    answerClicked($(this).attr("data-btn-id"))});

