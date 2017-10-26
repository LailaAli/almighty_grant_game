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
    healCount: 2,
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

var attackButton = document.getElementById("attackButton");
attackButton.onclick = function() {
	startCombat("attack");
};

var healButton = document.getElementById("healButton");
healButton.onclick = function() {
	startCombat("heal");
};

var fleeButton = document.getElementById("fleeButton");
fleeButton.onclick = function() {
	startCombat("flee");
};

function startCombat(attackHealorRun) {

	var gameTextDisplay = document.getElementById('gameTextDisplay');
	var grantHealthCounter = document.getElementById("grantHealthCounter");
    var playerRoundsWon = document.getElementById("playerRoundsWon");

	if (attackHealorRun === "attack") {//If the user clicked attack
      
      	attackRound();
	}

	if (attackHealorRun === "heal") {

		healRound();
	}

	if (attackHealorRun === "flee") {

		fleeRound();
	}

	if (player.health <= 0 || grant.health <=  0) {

      if (player.health > 0 && player.wins < 2) { //User Wins Round, Game Continues
          
          //increase roundswon and replenish grant 
          player.wins++;
          grant.health = 10;

          //update display stats
          grantHealthCounter.innerHTML = grant.health;
          playerRoundsWon.innerHTML = player.wins;

          //send message to user in window
          gameTextDisplay.innerHTML = "You stunned Grant Chirpus! However, his minion uses a potion and restores his HP to 10. What will you do?";
          
        } else if (player.health > 0 && player.wins === 2) { // User Wins Game
          grantHealthCounter.innerHTML = 0; //display Grant as dead
          player.wins++; //Add final win
          gameTextDisplay.innerHTML = "Congratulations, you have defeated Grant Chirpus! Peace may now fall across this land once more.";
          playerRoundsWon.innerHTML = player.wins;
          keepPlaying = false;
          
        } else { //User Health is 0 -> End Game
          gameTextDisplay.innerHTML = "Grant has killed you. Game Over.";
          keepPlaying = false;
        }
    }
}


function attackRound() {

	// alert("you clicked attack");

	var grantHealthCounter = document.getElementById("grantHealthCounter");
    grant.health = grant.health - player.attack();
    grantHealthCounter.innerHTML = grant.health;

    var playerHealthCounter = document.getElementById("playerHealth");
    player.health = player.health - grant.attack();
    playerHealthCounter.innerHTML = player.health;

    gameTextDisplay.innerHTML = "You attacked! Grant Attacked back! What now?";
}


function healRound() {

	if (player.healCount > 0) {

		//define locations
		var playerHealthCounter = document.getElementById("playerHealth");
		var playerHealCounter = document.getElementById("playerHealCounter");

		//add health and log to DOM
		player.health = player.health + player.heal();
		playerHealth.innerHTML = player.health;
		
		//increase count
		player.healCount--;

		//log heal count to DOM
		playerHealCounter.innerHTML = player.healCount;
		gameTextDisplay.innerHTML = "You used a heal potion. What now?";

	} else {

		gameTextDisplay.innerHTML = "You have no heals left. Attack or Flee?";
	}
}



function fleeRound () {

	alert("you clicked run")
}




//Random Number Generator

function getRandomInt(min, max) {//Nested into combatLoop
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is exclusive and the minimum is inclusive
}

})();