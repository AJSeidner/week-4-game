
//we need these variables to reset after game win or lose, but we need them to remain the same random number during game
var wins = 0;
var losses = 0;
var audioWin = new Audio("assets/sounds/POD.mp3");
var audioLoss = new Audio("assets/sounds/Fart.mp3");



$(document).ready(function game(){
var totalScore = 0;
$("#total-score").html(totalScore);
var targetNumber = Math.floor(Math.random()*120)+19;
 $("#random-number").html(targetNumber);
console.log(targetNumber);
var pickValueOne = Math.floor(Math.random()*12)+1;
var pickValueTwo = Math.floor(Math.random()*12)+1;
var pickValueThree = Math.floor(Math.random()*12)+1;
var pickValueFour = Math.floor(Math.random()*12)+1;

//when pick is selected
$("#pick-1").off("click");
$("#pick-1").on("click",  function(){
	totalScore += pickValueOne;
	$("#total-score").html(totalScore);
	console.log(pickValueOne);
	checkScore();

})
$("#pick-2").off("click");
$("#pick-2").on("click",  function(){
	totalScore += pickValueTwo;
	$("#total-score").html(totalScore);
	console.log(pickValueTwo);
	checkScore();

})
$("#pick-3").off("click");
$("#pick-3").on("click",  function(){
	totalScore += pickValueThree;
	$("#total-score").html(totalScore);
	console.log(pickValueThree);
	checkScore();
	
})
$("#pick-4").off("click");
$("#pick-4").on("click",  function(){
	totalScore += pickValueFour;
	$("#total-score").html(totalScore);
	console.log(pickValueFour);
	checkScore();
	
	
	
})

function checkScore(){
	var win = false;
	var lose = false;
	if (totalScore === targetNumber){
		win = true;
		wins ++;
		$("#wins").html(wins);
		audioWin.play();
		console.log("win");
		alert("It was the pick of destiny!");
		
	
	}else if (totalScore > targetNumber){
		lose = true;
		losses ++;
		$("#losses").html(losses);
		audioLoss.play();
		console.log("lose");
		alert("Maybe you should pick your boogers...?");
		
	}
	if(win === true || lose === true){
		game();
	}
}

});