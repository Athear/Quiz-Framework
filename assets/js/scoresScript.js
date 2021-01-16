

var scoreStorage=(JSON.parse(localStorage.getItem("quizScores")));

if(scoreStorage){
for(var i=0;i<scoreStorage.length;i++){
    var scoreObj = scoreStorage[i];
    var scoreText = i+1+". Name: "+scoreObj.name+" | Score: "+scoreObj.score
    makeScoreElement(scoreText)
}
}

function makeScoreElement(scoreText){
    var newRow = $("<div class=row>")
    var frontBuffer = $('<div class="col-md-1">')
    var backBuffer = $('<div class="col-md-1">')
    var scoreCol = $('<div class="col-md-10"><p class="score-item">')

    scoreCol.text(this.scoreText)


    newRow.append(frontBuffer);
    newRow.append(scoreCol);
    newRow.append(backBuffer);
    $("#score-container").append(newRow);


}


//add listeners for buttons
$("#back-button").on("click",function(){
    console.log("back clicked");
    window.location = '../../index.html'
})

$("#clear-button").on("click",function(){
    $("#score-container").empty();
    localStorage.removeItem("quizScores");
})