var ball;
var database
var gameState= 0
var allPlayers
var distance = 0
var playerCount=0
var form ,player, game
var canvas 
function setup(){
    database = firebase.database()
    
   canvas =createCanvas(displayWidth-20,displayHeight-20);
    game = new Game()
    game.getState()
    game.start()
   
}

function draw(){
    if (playerCount === 4){
game.update(1)

    }
    if (gameState === 1){
clear()
game.play()

    }
  
}

