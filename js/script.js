let playerTurn = 1;
function changeTurn(){
  if (playerTurn === 1){
    playerTurn = 2;
  }
  else if (playerTurn === 2){
    playerTurn = 1;
  }
}

function performLogic(buttonId, tileId) {
  changeTurn();
  $(buttonId).hide();
  if (playerTurn === 1){
    $(tileId).text("O");
  }
  else if (playerTurn === 2) {
    $(tileId).text("X");
  }
  threeInRow();
}

function threeInRow (){
  if ("#tile1" === "O" & "#tile2" === "O" & "#tile3" === "O"){
    $("body").append("Congrats Player 1! You Win!");
  }
  else if ("#tile1" === "X" & "#tile2" === "X" & "#tileX" === "O"){
    $(".winner").html("Congrats Player 2! You Win!");
  }
}





$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {

    performLogic("#button3","#tile3");
});

$("#button4").click(function() {

    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
  
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
 
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
 
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {

    performLogic("#button8","#tile8");
});

$("#button9").click(function() {

    performLogic("#button9","#tile9");
});

