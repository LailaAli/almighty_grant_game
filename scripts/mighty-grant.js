//Declare Variables

var userName;
var grant = 'Grant Chirpus';

var grantHealth = 10;
var userHealth = 40;
var userWins = 0;

var initiateCombat;
var continueGame;

var keepPlaying = true; //Game Kill Switch



//Start Game Function


function startGame() {
  
  initiateCombat = prompt('Do you want to fight against the mighty Grant Chirpus? (Yes or No)');
		if (initiateCombat === "Yes") {
		    userName = prompt('What is your name valiant hero?');
		  } else {
		    console.log("I see, return here when you have prepared.");
			  keepPlaying = false;
			}
		}

//Game Loop Function

function gameLoop () {
  
  while (keepPlaying === true) {
    debugger;
    
      combatLoop ();
      roundEndCheck ();
  }
}

//Combat Loop function

function combatLoop () {//Nested into gameLoop
  
  while (userHealth > 0 && grantHealth > 0 && keepPlaying) {
    debugger;
    console.log (userName + " has " + userHealth + " HP left!");
    console.log (grant + " has " + grantHealth + " HP left!");
      
    var grantAttack = getRandomInt();
    var userAttack = getRandomInt();
    
    grantHealth = grantHealth - userAttack;
    userHealth = userHealth - grantAttack;
    
    //User Attack Prompt Attempt 1

    //continueGame = window.confirm('Attack!');
    
    continueGame = window.confirm(userName + ' has ' + userHealth + ' HP left! ' + grant + " has " + grantHealth + " HP left! Attack again?");
        
    if (continueGame === true) {
        console.log ('You attacked!');
      } else {
        console.log ('You have fled the battle!');
        keepPlaying = false;
      }
  }
}

// Round End and Check for Win or Loss

function roundEndCheck () {//Nested into gameLoop
    
    if (keepPlaying) {
      if (userHealth > 0 && userWins < 2) { //User Wins Round, Game Continues
          console.log (userName + " Stunned Grant Chirpus! Keep fighting!");
          userWins++;
          grantHealth = 10;
          
        } else if (userHealth > 0 && userWins === 2) { // User Wins Game
          userWins++;
          console.log ("Congratulations, you have defeated Grant Chirpus!");
          keepPlaying = false;
          
        } else { //User Health is 0 -> End Game
          console.log ("Grant Chirpus has killed you. Game Over.");
          keepPlaying = false;
        }
    }
}

//Random Number Generator

function getRandomInt() {//Nested into combatLoop
  var min = 0;
  var max = 5;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is exclusive and the minimum is inclusive
  
}

//CALL AND EXECUTE Game

startGame ();
gameLoop ();


