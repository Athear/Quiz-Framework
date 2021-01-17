var scoreStorage=(JSON.parse(localStorage.getItem("quizScores")));

//if there are scores, sort the list and iterate through it to create a new elements for each.
if(scoreStorage){

    scoreStorage.sort(function (a,b){
        return b.score - a.score
    });

    for(var i=0;i<scoreStorage.length;i++){
        var scoreObj = scoreStorage[i];
        var scoreText = i+1+". Name: "+scoreObj.name+" | Score: "+scoreObj.score
        makeScoreElement(scoreText)
    }
}

function makeScoreElement(scoreText){
    //form a new row with appropriate columns
    var newRow = $("<div class=row>")
    var frontBuffer = $('<div class="col-md-1">')
    var backBuffer = $('<div class="col-md-1">')
    var scoreCol = $('<div class="col-md-10"><p class="score-item">')

    //add the given score
    scoreCol.text(this.scoreText)

    newRow.append(frontBuffer);
    newRow.append(scoreCol);
    newRow.append(backBuffer);
    $("#score-container").append(newRow);
}


$("#clear-button").on("click",function(){
    $("#score-container").empty();
    localStorage.removeItem("quizScores");
})