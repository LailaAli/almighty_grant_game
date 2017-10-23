(function(){

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
  
  do {
    initiateCombat = prompt('Do you want to fight against the mighty Grant Chirpus? (Yes or No)');
  } while (initiateCombat !== "Yes" && initiateCombat !== "No")

		if (initiateCombat === "Yes") {
		    validateUserName ();
		}

    if (initiateCombat === "No") {
		    alert ("I see, return here when you have prepared.");
        //console.log("I see, return here when you have prepared.");
			  keepPlaying = false;
		} 
}

//Validate User Name Function

function validateUserName () {
  
  userName = prompt('Please, tell us your name brave hero! The fate of our land depends on it!');

  if (userName === null) {
    alert ("Oh, you have no name? You must be a ghost. Return when you have restored your spirit to a flesh body.");
        //console.log("I see, return here when you have prepared.");
        keepPlaying = false;
  }
}

//Game Loop Function

function gameLoop () {
  
  while (keepPlaying === true) {
    
      combatLoop ();
      roundEndCheck ();
  }
}

//Combat Loop function

function combatLoop () {//Nested into gameLoop

  while (userHealth > 0 && grantHealth > 0 && keepPlaying) {
    
    if (grantHealth === 10) {
      alert (userName + ' has ' + userHealth + ' HP, and ' + grant + " has " + grantHealth + " HP! Attack!");
    }

    //console.log (userName + " has " + userHealth + " HP left!");
    //console.log (grant + " has " + grantHealth + " HP left!");
      
    var grantAttack = getRandomInt();
    var userAttack = getRandomInt();
    
    grantHealth = grantHealth - userAttack;
    userHealth = userHealth - grantAttack;
    
    //User Attack Prompt Attempt 1

    //continueGame = window.confirm('Attack!');
    
    if (userHealth > 0 && grantHealth > 0) {

        continueGame = window.confirm(userName + ' has ' + userHealth + ' HP left! ' + grant + " has " + grantHealth + " HP left! Click Ok to attack again, or Cancel to flee!");
            
        if (continueGame === true) {
            console.log ('You attacked!');
          } else {
            alert ('You have fled the battle!');
            //console.log ('You have fled the battle!');
            keepPlaying = false;
          }
    }
  }
}

// Round End and Check for Win or Loss

function roundEndCheck () {//Nested into gameLoop
    
    if (keepPlaying) {
      if (userHealth > 0 && userWins < 2) { //User Wins Round, Game Continues
          userWins++;
          //console.log (userName + " Stunned Grant Chirpus! His minion used a potion and restored his HP to 10. Keep fighting!");
          alert (userName + " Stunned Grant Chirpus! His minion uses a potion and restors his HP to 10. You must stun him " + (3-userWins) + " more time(s) until he is vanquished. Keep fighting!");
          grantHealth = 10;
          
        } else if (userHealth > 0 && userWins === 2) { // User Wins Game
          userWins++;
          alert ("Congratulations, you have defeated Grant Chirpus!");
          //console.log ("Congratulations, you have defeated Grant Chirpus!");
          keepPlaying = false;
          
        } else { //User Health is 0 -> End Game
          alert ("Grant Chirpus has killed you. Game Over.");
          //console.log ("Grant Chirpus has killed you. Game Over.");
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

})();
