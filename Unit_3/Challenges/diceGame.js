/* 
    * Let's build a dice game!
    - User plays the dice game, roll dice up to three times, and I want to focus on scoring per dice roll and totaling the score at the end of the game.

    To Do List:
    - To tell JS what things are with variables
        - score
        - dieRollValue
        - the state of the dice (rolled or not rolled)
        - numberOfRolls (eventually try to set a max of three)
    - Use dictionary/object/lookup table to store our scoring values
    - Use state/a state machine to check which action options the player has
        not rolled, rolled, score(ending the game and printing the final total)
    - Build a function to update the player score
    - Build a function to roll the die and update the roll count
    - Build function to monitor/check our turn/action state and advance play state (can we roll? are we done? is the game not started yet?)
        1. Check if the action/next action is valid (can we do this?) - IF ELSE
        2. If die is rolled: 
            - first check if not at max rolling count of three, 
            - if we are still under three then we can roll the die, - CONDITIONAL
            - total and set score, - REASSIGN SCORE
            - make a console message to see the changes.
        3. If die is to be scored: (CONDITIONAL) print a message with the player's final score & reset our starting values/reset the game (REASSIGN VARIABLES)
*/

//* Creating my variables
let score = 0; // default starting score for the game
let dieRollValue; // the variable to hold our roll value
let stateOfDie = "not rolled"; // current state of our die
let numberOfRolls = 0; // starting count for our allowed rolls (1-3)

//* Use a dictionary to store score values
// 1 = 100, 2 = 20, 3 = 30, etc.
const scoring = {
    1: 100,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60
};

//* State Machine of player's turn:
// 3 states: "roll", "not rolled", "score"
let dieState = {
    "not rolled": ["roll"],
    roll: ["roll", "score"],
    score: ["not rolled"]
}

// Make a function to update our score, as well as print a message to give us feedback

function scoreDie (dict, dieSide) {
    // Create some math to add new roll score value to our base score variable

    let points = dict[dieSide];
    // score += dict[dieSide];
    score += points;

    // Console log a message of where score is
    console.log(`After rolling the die, your new score is: ${score}.`);
}

// Test if scoreDie works...IT WORKS!
// scoreDie(scoring, 5);
// scoreDie(scoring, 1);
// Build a function that will generate a random number limited by 6 (using a d6) and increase our roll count variable numberOfRolls (reassignment)
// Just picks which side we land on and adds to roll count number
function rollDie() {
    // Generate a random number that is <= 6
    dieRollValue = Math.floor(Math.random() * 6 + 1);
    // console.log("Die dace value: ", dieRollValue); // testing
    numberOfRolls++;
    // console.log("Number of rolls: ", numberOfRolls); // testing
}

// Testing function..IT WORKS!
// rollDie();
// rollDie();
// rollDie();
// Build a function to pull in our state/action change, check it, and run the rest of our conditionals
function playState(newDieState) {
    // Reference/Find my starting state
    // Game default start is "not rolled", but need variable that will be updated as player "roll"s, and want to check if action is available
    let validDieState = dieState[stateOfDie];

    // Using a conditional, check if die action of validDieState is doable
    if (validDieState.includes(newDieState)) {
        // set out newDieState to the variable stateOfDie (reassign)
        stateOfDie = newDieState;

        // If the state of die is "roll" do the following:
        if (stateOfDie == "roll") {
            // first check to make sure we aren't at max number of rolls
            if (numberOfRolls === 3) {
                console.log(`Hey! You've rolled ${numberOfRolls} times and need to score! This roll wont count.`);
            } else {
                // If we have't  hit max rolls, roll the die and send message to the player
                rollDie(); // will get a random value (1-6) and increase number of rolls

                // Write message
                console.log(`You rolled a ${dieRollValue}! Would you like to roll again or finalize the score?`);

                // Score the rolled dice and print a message of rolls made
                scoreDie(scoring, dieRollValue); // Run function built above
                console.log(`You have rolled ${numberOfRolls} time(s).`)
            }
        }


        // If the state of die is "score" do the following
        if (stateOfDie == "score") {
            // Reset all values, print final score message
            console.log(`Your final score is ${score}. Thanks for playing!`);
            dieRollValue = "not rolled";
            numberOfRolls = 0;
            score = 0;
        }

    } else {
        console.error(`Invalid move! Cannot ${newDieState} after ${validDieState}.`);
    }
}

// Calling on the playState function and give die action as argument
// playState("roll");
// playState("roll");
// playState("roll");
// playState("roll");
// playState("score");

function roundTwo() {
  console.log("\n\n------ Welcome to Dice Game, Round Two! ------\n");
  playState("roll");
  playState("roll");
  playState("roll");
  playState("score");
  console.log("\n------ End of Round two, thanks for playing! ------\n");
}

roundTwo();