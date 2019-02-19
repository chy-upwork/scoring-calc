//console.log("connected");

// Select the player buttons, and set intial score

var p1Button = document.querySelector("#b1");
var p1Score = 0;

var p2Button = document.querySelector("#b2");
var p2Score = 0;

var resetButton = document.querySelector("#b3");

var numInput = document.querySelector("input");

var winningScoreDisplay = document.querySelector("#gameOver");



// Selects the Score of each player


var p1Display = document.querySelector("#p1Display");

var p2Display = document.querySelector("#p2Display");


// test for game score


var gameOver = false;

var winningScore = 5;



//Tesing P1 button


p1Button.addEventListener("click",function(){
	
	if (!gameOver){
	p1Score++;
		
		if (p1Score === winningScore){
			
			p1Display.classList.add("winner");
			gameOver = true;
			
			//Set gameOver as true means the logic will not work anymore
			//because (!true) is false which stop adding numbers. 
			
		}
	}
	
	p1Display.textContent = p1Score;
	
});


//Testing P2 button

p2Button.addEventListener("click",function(){
	
	if (!gameOver){
	p2Score++;
		
		if (p2Score === winningScore){
			
			p2Display.classList.add("winner");
			gameOver = true;
			
			//Set gameOver as true means the logic will not work anymore
			//because (!true) is false which stop adding numbers. 
		}
	}
	
	p2Display.textContent = p2Score;
	
	
	
});


//Testing the Reset Button

resetButton.addEventListener("click",function(){
	
	//we will just a common funtion for reset
	
	reset();
	
});

function reset(){
	
	p1Score = 0;
	p2Score = 0;
	
	
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	
	
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	
	gameOver = false;
}

//input

numInput.addEventListener("change",function(){
	
	winningScoreDisplay.textContent = Number(numInput.value);
	
	//numInput.value returns string
	//Number is convert value in string to num
	
	winningScore = Number(numInput.value);
	
	reset(); 
	
	// the game will reset if the value changed half way
	
});

