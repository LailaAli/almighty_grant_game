(function(){

//Declare Variables

var keepPlaying = true; //Game Kill Switch

var grant = {
  name: "Grant Chirpus",
  health: 10,
  wins: 0,
  attack() {
    var attackPower = getRandomInt(1,5);
    return attackPower;
  }
}

var user = {
  name: null,
  health: 40,
  lives: 1,
  healCount: 0,
  wins: 0,
  heal() {
    var healPower = getRandomInt(1,10);
    return healPower;
  },
  attack() {
    var attackPower = getRandomInt(1,3);
    return attackPower;
  }
}

//Start Game Function

function startGame() {
  
  var initiateCombat;

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
  
  user.name = prompt('Please, tell us your name brave hero! The fate of our land depends on it!');

  if (user.name === null) {
    alert ("Oh, you have no name? You must be a ghost. Return when you have restored your spirit to a flesh body.");
        //console.log("I see, return here when you have prepared.");
        keepPlaying = false;
  }
}

//Game Loop Function

function gameLoop() {
  
  while (keepPlaying === true) {
    
      combatLoop();
      roundEndCheck();
  }
}

//Combat Loop function

function combatLoop() {//Nested into gameLoop

  var continueGame;

  while (user.health > 0 && grant.health > 0 && keepPlaying) {
    
    if (grant.health === 10) {
      alert(user.name + ' has ' + user.health + ' HP, and ' + grant.name + " has " + grant.health + " HP! Attack!");
    }
      
    if (user.health > 0 && grant.health > 0) {

        do {
          continueGame = prompt(user.name + ' has ' + user.health + ' HP left! ' + grant.name + " has " + grant.health + " HP left! Would you like to Attack, Heal, or Run?");
        } while (continueGame !== "Attack" && continueGame !== "Heal" && continueGame !== "Run");
            
        if (continueGame === "Attack") {
          alert ('You attacked! Grant attacks you back!');
          grant.health = grant.health - user.attack();
          user.health = user.health - grant.attack();
        }

        if (continueGame === "Heal") { //TO FINISH LATER
          if (user.healCount < 2) {
            var roundHealthIncrease = user.heal();
            user.health = user.health + roundHealthIncrease;
            user.healCount++;
            alert("You have used a health potion! It increased your HP by " + roundHealthIncrease + ". You have " + (2-user.healCount) + " potion(s) left!");
          } else {
            alert("You are out of potions! You can no longer Heal.");
          }
        }

        if (continueGame === "Run") {
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
      if (user.health > 0 && user.wins < 2) { //User Wins Round, Game Continues
          user.wins++;
          //console.log (userName + " Stunned Grant Chirpus! His minion used a potion and restored his HP to 10. Keep fighting!");
          alert (user.name + " Stunned Grant Chirpus! His minion uses a potion and restors his HP to 10. You must stun him " + (3-user.wins) + " more time(s) until he is vanquished. Keep fighting!");
          grant.health = 10;
          
        } else if (user.health > 0 && user.wins === 2) { // User Wins Game
          user.wins++;
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

function getRandomInt(min, max) {//Nested into combatLoop
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is exclusive and the minimum is inclusive
  
}

//CALL AND EXECUTE Game

startGame ();
gameLoop ();

})();
