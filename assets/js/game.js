// this is the variable that allows a User to input data (i.e. their Robot's name)
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
if (playerHealth > 0) {
    console.log("Your player is still alive")
}

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("Welcome to Robot Gladiators!");
};

function fight() {
    window.alert("The fight has begun!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.

}

fight();{
enemyHealth = enemyHealth - playerAttack;
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight" ) {
console.log(promptFight);

console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.")
}
} else if (promptFight === "skip" || promptFight === "Skip" || promptFight === "SKIP"){
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");

    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip this fight. Goodbye!");
    playerMoney = playerMoney - 2;
    }
    else {
        fight()
    }
} else {
    window.alert("You need to choose a valid option. TRY AGAIN!")
}
}