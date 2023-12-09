var board = document.querySelector("canvas");
var context = board.getContext("2d");

var scoreOne = document.getElementById("p1Score");
var scoreTwo = document.getElementById("p2Score");

// character size
var rectSize = 1;

// player1/2 coordinates and velocity
var oneX = 3;
var oneY = 8;
var oneVelX = 0;
var oneVelY = 0;

var twoX = 16;
var twoY = 8;
var twoVelX = 0;
var twoVelY = 0;

// score
var scorep1 = 0;
var scorep2 = 0;

// food
var foodX;
var foodY;

// movement speed
var speed = 700;

document.addEventListener("keyup", controlP1);
document.addEventListener("keyup", controlP2);

placeFood();
setInterval(update, speed/5);

function update() {
    context.clearRect(oneX, oneY, rectSize, rectSize);
    oneX += oneVelX;
    oneY += oneVelY;
    context.fillStyle = "skyblue"; // player 1
    context.fillRect(oneX, oneY, rectSize, rectSize);
    
    context.clearRect(twoX, twoY, rectSize, rectSize);
    twoX += twoVelX;
    twoY += twoVelY;
    context.fillStyle = "#fc301d"; // player 2
    context.fillRect(twoX, twoY, rectSize, rectSize);
    
    context.fillStyle = "lime";
    context.fillRect(foodX, foodY, rectSize, rectSize);
    
    if(oneX == foodX && oneY == foodY) {
        scoreOne.innerHTML = scorep1 += 1;
        placeFood();
    }
    
    if(twoX == foodX && twoY == foodY) {
        scoreTwo.innerHTML = scorep2 += 1;
        placeFood();
    }
    
    if(scoreOne.innerHTML == 10) {
        location.href = "playerOne.html";
    }
    
    if(scoreTwo.innerHTML == 10) {
        location.href = "playerTwo.html";
    }
}

function controlP1(e) {
    if(e.key == "w") {
        oneVelX = 0;
        oneVelY = -1;
    }
    
    if(e.key == "s") {
        oneVelY = 1;
        oneVelX = 0;
    }
    
    if(e.key == "d") {
        oneVelY = 0;
        oneVelX = 1;
    }
    
    if(e.key == "a") {
        oneVelY = 0;
        oneVelX = -1;
    }
    
    if(e.key == "p") { // pause the game
        oneVelX = 0;
        oneVelY = 0;
        twoVelX = 0;
        twoVelY = 0;
        
        alert("\n     Game Paused");
    }
	
	if(e.key == "h") {
		alert("Press W, S, A, D to move the blue character or the player 1");
		alert("Press Up, Down, Left, Right buttons to move the red character or the player 2");
		alert("The Green dot represents the score, if the player touched it his/her score will increase by 1");
		alert("The goal is to score up to 10, if you reach 10 score you are the winner");
	}
}

function controlP2(e) {
    if(e.code == "ArrowUp") {
        twoVelX = 0;
        twoVelY = -1;
    }
    
    if(e.code == "ArrowDown") {
        twoVelY = 1;
        twoVelX = 0;
    }
    
    if(e.code == "ArrowRight") {
        twoVelY = 0;
        twoVelX = 1;
    }
    
    if(e.code == "ArrowLeft") {
        twoVelY = 0;
        twoVelX = -1;
    }
}

function placeFood() {
    foodX = Math.round(Math.random() * 19);
    foodY = Math.round(Math.random() * 19);
}