

var scoreStorage=(JSON.parse(localStorage.getItem("quizScores")));

function makeScoreElement(){
    var newRow = $("<div class=row>")
    var frontBuffer = $('<div class="col-md-1">')
    var backBuffer = $('<div class="col-md-1">')
    var scoreCol = $('<div class="col-md-10"><p class="score-item">')

    scoreCol.text("1. dummy score - 10")

    newRow.append(frontBuffer);
    newRow.append(scoreCol);
    newRow.append(backBuffer);
    $("#score-container").append(newRow);


}

makeScoreElement();

//add listeners for buttons
$("#back-button").on("click",function(){
    console.log("back clicked");
    window.location = '../../index.html'
})

$("#clear-button").on("click",function(){
    $("#score-container").empty();
    localStorage.removeItem("quizScores");
})