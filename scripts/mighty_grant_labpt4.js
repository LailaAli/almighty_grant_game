(function(){

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

  var player = {
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
		    validatePlayerName ();
		}

    if (initiateCombat === "No") {
		    alert ("I see, return here when you have prepared.");
        //console.log("I see, return here when you have prepared.");
			  keepPlaying = false;
		} 
}

//Validate User Name Function

function validatePlayerName () {
  
  player.name = prompt('Please, tell us your name brave hero! The fate of our land depends on it!');

  debugger;

  if (player.name === null) {
    alert ("Oh, you have no name? You must be a ghost. Return when you have restored your spirit to a flesh body.");
        //console.log("I see, return here when you have prepared.");
        keepPlaying = false;
  }
}

//Game Loop Function

function startCombat() {

  while (keepPlaying === true) {
    
      combatLoop();
      roundEndCheck();
  }
}

//Combat Loop function

function combatLoop() {//Nested into gameLoop

  var continueGame;

  //while (player.health > 0 && grant.health > 0 && keepPlaying) {
    
    //Attack Button Function
    var executeAttack = document.getElementById('attackButton');
    var displayBlock = document.getElementById('gameTextDisplay');
    executeAttack.onclick = function() {
      
      //User Attacks
      grant.health = grant.health - player.attack();
      var playerAttackLog = document.createElement('p');
      var insertText = document.createTextNode('You attacked!');
      playerAttackLog.appendChild(insertText);
      displayBlock.appendChild(attackLog);

      //Grant Attacks
      player.health = player.health - grant.attack();
      var grantAttackLog = document.createElement('p');
      var insertText = document.createTextNode('Grant attacked back!');
      grantAttackLog.appendChild(insertText);
      displayBlock.appendChild(attackLog);
    }

    /*
    if (grant.health === 10) {
      alert(player.name + ' has ' + player.health + ' HP, and ' + grant.name + " has " + grant.health + " HP! Attack!");
    }
      
    if (player.health > 0 && grant.health > 0) {

        do {
          continueGame = prompt(player.name + ' has ' + player.health + ' HP left! ' + grant.name + " has " + grant.health + " HP left! Would you like to Attack, Heal, or Run?");
        } while (continueGame !== "Attack" && continueGame !== "Heal" && continueGame !== "Run");
            
        if (continueGame === "Attack") {
          alert ('You attacked! Grant attacks you back!');
          grant.health = grant.health - player.attack();
          player.health = player.health - grant.attack();
        }

        if (continueGame === "Heal") { //TO FINISH LATER
          if (player.healCount < 2) {
            var roundHealthIncrease = player.heal();
            player.health = player.health + roundHealthIncrease;
            player.healCount++;
            alert("You have used a health potion! It increased your HP by " + roundHealthIncrease + ". You have " + (2-player.healCount) + " potion(s) left!");
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
  }*/
}

// Round End and Check for Win or Loss

function roundEndCheck () {//Nested into gameLoop
    
    if (keepPlaying) {
      if (player.health > 0 && player.wins < 2) { //User Wins Round, Game Continues
          player.wins++;
          //console.log (userName + " Stunned Grant Chirpus! His minion used a potion and restored his HP to 10. Keep fighting!");
          alert (player.name + " Stunned Grant Chirpus! His minion uses a potion and restors his HP to 10. You must stun him " + (3-player.wins) + " more time(s) until he is vanquished. Keep fighting!");
          grant.health = 10;
          
        } else if (player.health > 0 && player.wins === 2) { // User Wins Game
          player.wins++;
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
startCombat ();

})();
