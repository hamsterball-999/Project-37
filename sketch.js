var canvas;
var submitButton;
var quiz, contestant, question;
var gameState = 0;
var contestantCount;
var database;
var allContestants;

function setup(){
  canvas = createCanvas(1300,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  
  if(contestantCount === 4){
    quiz.updateState(1);

  }

  if(gameState===1){
    clear();
    quiz.play();
  }
  
}

