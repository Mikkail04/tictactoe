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
    $(tileId).text("X");
  }
  else if (playerTurn === 2) {
    $(tileId).text("O");
  }
  HorizontalRow();
 VerticalRow();
 DiagonalRow();
}

function getTileValue(tileId){
  return $(tileId).text(); 
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

function HorizontalRow(){
  if (getTileValue("#tile1") === "O" && getTileValue("#tile2") === "O" && getTileValue("#tile3") === "O"){
   $(".winner").html("Congrats Player 1! You Win!");
    $("h1").html("Player 1 Wins!");
  }
  else if (getTileValue("#tile4") === "O" && getTileValue("#tile5") === "O" && getTileValue("#tile6") === "O"){
   $(".winner").html("Congrats Player 1! You Win!");
    $("h1").html("Player 1 Wins!");
  }
  else if (getTileValue("#tile7") === "O" && getTileValue("#tile8") === "O" && getTileValue("#tile9") === "O"){
   $(".winner").html("Congrats Player 1! You Win!");
    $("h1").html("Player 1 Wins!");
  }
  else if (getTileValue("#tile1") === "X" && getTileValue("#tile2") === "X" && getTileValue("#tile3") === "X"){
   $(".winner").html("Congrats Player 2! You Win!");
    $("h1").html("Player 2 Wins!");
  }
   else if (getTileValue("#tile4") === "X" && getTileValue("#tile5") === "X" && getTileValue("#tile6") === "X"){
   $(".winner").html("Congrats Player 2! You Win!");
     $("h1").html("Player 2 Wins!");
  }
  else if (getTileValue("#tile7") === "X" && getTileValue("#tile8") === "X" && getTileValue("#tile9") === "X"){
   $(".winner").html("Congrats Player 2! You Win!");
    $("h1").html("Player 2 Wins!");
  }
}
function VerticalRow(){
  if (getTileValue("#tile1") === "O" && getTileValue("#tile4") === "O" && getTileValue("#tile7") === "O"){
   $(".winner").html("Congrats Player 1! You Win!");
    $("h1").html("Player 1 Wins!");
  }
  else if (getTileValue("#tile2") === "O" && getTileValue("#tile5") === "O" && getTileValue("#tile8") === "O"){
   $(".winner").html("Congrats Player 1! You Win!");
    $("h1").html("Player 1 Wins!");
  }
  else if (getTileValue("#tile3") === "O" && getTileValue("#tile6") === "O" && getTileValue("#tile9") === "O"){
   $(".winner").html("Congrats Player 1! You Win!");
    $("h1").html("Player 1 Wins!");
  }
  else if (getTileValue("#tile1") === "X" && getTileValue("#tile4") === "X" && getTileValue("#tile7") === "X"){
   $(".winner").html("Congrats Player 2! You Win!");
    $("h1").html("Player 2 Wins!");
  }
   else if (getTileValue("#tile2") === "X" && getTileValue("#tile5") === "X" && getTileValue("#tile8") === "X"){
   $(".winner").html("Congrats Player 2! You Win!");
     $("h1").html("Player 2 Wins!");
  }
  else if (getTileValue("#tile3") === "X" && getTileValue("#tile6") === "X" && getTileValue("#tile9") === "X"){
   $(".winner").html("Congrats Player 2! You Win!");
    $("h1").html("Player 2 Wins!");
}  
}
function DiagonalRow(){
  if (getTileValue("#tile1") === "O" && getTileValue("#tile5") === "O" && getTileValue("#tile9") === "O"){
   $(".winner").html("Congrats Player 1! You Win!");
    $("h1").html("Player 1 Wins!");
  }
  else if (getTileValue("#tile1") === "X" && getTileValue("#tile5") === "X" && getTileValue("#tile9") === "X"){
   $(".winner").html("Congrats Player 2! You Win!");
    $("h1").html("Player 2 Wins!");
  }
}  


