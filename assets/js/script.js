//Get the loaded quiz
var currentQuiz = JSON.parse(sessionStorage.getItem("loadedQuiz"));
console.log(currentQuiz);//DEBUG
$("#quizTitle").text(currentQuiz.Title);
$("#welcome").text(currentQuiz.welcome);

//HTML elements
var questionPane =$("#question-pane");
var greetingPane =$("#greeting-pane");
var completePane =$("#complete-pane");

//Quiz components
var questionNumber;
var quizTimer;
var quizCountdown;
var penalty = 10;

function startQuiz(){
    questionNumber =0; 
    quizCountdown = 72;
    loadQuestion();
    $("#greeting-pane").attr("class","row hidden");
    $("#question-pane").attr("class","row");
    $("#timer").text(quizCountdown)

    quizTimer = setInterval(function(){
        quizCountdown--;
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
        $("#complete-header").text("Out of Time!");
    }
    $("#complete-score").text(quizCountdown);
    $("#question-pane").attr("class","row hidden");
    $("#complete-pane").attr("class","row");
}

function loadQuestion(){
    //TODO: consider using .shift instead of iteraing
    var currentQuestion= currentQuiz.questionList[questionNumber];
    var answerButtons = $(".answer-btn");
    $("#question-header").text(currentQuestion.question);

    for(var i=0; i<4;i++){
        answerButtons[i].textContent = currentQuestion.answers[i];
    }
}

function answerClicked(which){
    console.log(which); //DEBUG
    console.log(currentQuiz.questionList[questionNumber].correctAnswer);
    console.log(which==currentQuiz.questionList[questionNumber].correctAnswer);
    if(which==currentQuiz.questionList[questionNumber].correctAnswer){
        $("#answer-valid-alert").text("You got it!");
    }
    else{
        $("#answer-valid-alert").text("WRONG");
        quizCountdown=quizCountdown-penalty;
        $("#timer").text(quizCountdown);
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
    //TODO: don't let them submit if score = 0
    // event.preventDefault(); //DEBUG
    var scoreStorage;
    var scoreObj;
    //test if local storage exists. Make an empty object if not
    if(!localStorage.getItem("quizScores")){
        scoreStorage=[];
    }else{
        scoreStorage=(JSON.parse(localStorage.getItem("quizScores")));
    }
    console.log(scoreStorage);//DEBUG
    scoreObj=
    {
        "name":$("#score-input").val(),
        "score":quizCountdown
    };
    
    scoreStorage.push(scoreObj);
    localStorage.setItem("quizScores",JSON.stringify(scoreStorage));
}

//Click listers for buttons
$("#startButton").on("click", startQuiz);
$("#score-btn").on("click", submitScore);

$(".answer-btn").on("click", function(){
    console.log($(this).attr("data-btn-id"));
    answerClicked($(this).attr("data-btn-id"))});

