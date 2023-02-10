/* 
    Let's build something cool!
    We will make a Spider Man battle program that randomly pits Spidy vs a foe.

    ?- Set Spidy's HP
    ?- Create a villain array of villain objects for Spidy to battle
    ?- Make something to randomly pick a villain
    ?- Use a do while loop to monitor if the villain's HP is above 0
    ?- In the while loop make attacks the effect HP of both Spidy and the Villain
        ?- Add some console.logs to give us messages throughout the battle
    ?- Create an ending message with a conditional on who won the battle
*/

let spidyHP = 20;
let badGuys = [
    {
        baddie: "Green Goblin",
        hp: 15
    },
    {
        baddie: "Venom",
        hp: 25
    },
    {
        baddie: "Stilt-Man",
        hp: 5
    },
    {
        baddie: "Thug",
        hp: 0
    },
];

// console.log(badGuys.length);
// Created random number not greater than array length
let rand = Math.floor(Math.random() * badGuys.length);
// console.log(rand);

// Grab random villain from array
let villain = badGuys[rand];
console.log(villain);

// Message on who appeared
console.log(`${villain.baddie} has appeared and is up to no good!`);

do {
    // Take out the thug asap
    if (villain.baddie == "Thug") {
        console.log("Spider-Man mops the floor with the Thug...");
        break;
    }

// Message & attack from villain
console.log(`${villain.baddie} hits Spider-Man!`);
spidyHP--; // Villain attacking for 1 hp

console.log("Spider-Man HP: ", spidyHP);

// Make random spidy attack
spidyHit = Math.floor(Math.random() * 3);
console.log(`Spider-Man hits ${villain.baddie} for ${spidyHit} damage!!!!`);

// Villain HP math & message
villain.hp -= spidyHit;
console.log("Villain HP: ", villain.hp);

if (spidyHP === 0) {
    console.log("Spider-Man has been knocked out");
    break;
}

} while (villain.hp >= 0);

// Conditionally print a win or loss

if (villain.hp <= 0) {
    console.log(`Spider-Man has saved the day and captured ${villain.baddie}!`)
} else {
    console.log(`${villain.baddie} has defeated Spider-Man... who will save us now?!`)
}