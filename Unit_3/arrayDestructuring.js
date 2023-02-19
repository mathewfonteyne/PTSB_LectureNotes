/* 
    ? Array Destructuring

    - Allows us to unpack values from arrays into distinct variables
    - Similar syntax array literals, but the square brackets [ ] are on the left side of the assignment operator (=)
    - Great way to pull info from the array and assign to it's own variable
*/

// W/O Destructuring
// const fullName = ["Mathew", "Fonteyne"];
// const firstName = fullName[0];
// const lastName = fullName[1];
// console.log(firstName, lastName);

// W/ Destructuring

const fullName = ["Mathew", "Fonteyne"];
let [firstName, lastName] = fullName;
console.log(firstName); // Mathew
console.log(lastName); // Fonteyne
console.log(firstName, lastName); // Mathew Fonteyne

// ----------------------------------------------------------------
/* 
    ? Spread Operator

    - The spread operator basically pulls out the elements of an array as a standalone list of elements

    Denoted by three consecutive periods: ...Array
*/

const myName = ["Mathew", "Fonteyne"];

const copiedName = [...myName]; // The spread operator inserts the elements from myName
console.log("Copied w/ spread operator: ", copiedName); // Copied w/ spread operator:  [ 'Mathew', 'Fonteyne' ]

const anotherCopy = [myName]; // inserts the array as a whole
console.log("Copied w/o spread operator: ", anotherCopy); // Copied w/o spread operator:  [ [ 'Mathew', 'Fonteyne' ] ]

// An example with numbers:
// let numberArray = [];

// for (i = 0; i <= 20; i++) {
//     numberArray.push(i);
// }
// console.log(numberArray);

// const newNumberArray = [...numberArray];
// console.log(newNumberArray);

// The spread operator "copied" the first state of my name, the copy did not update but the original can
myName.unshift("Mr.");
console.log("My Name: ", myName); // My Name:  [ 'Mr.', 'Mathew', 'Fonteyne' ]
console.log("Copied Name: ", copiedName); // Copied Name:  [ 'Mathew', 'Fonteyne' ]

// Math.min, Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(1, 5, 13, -3)); // -3

const prices = [10.99, 5.99, 20, 3.99];
console.log(Math.min(prices));// NaN //  Can't perform Math.min on array, array != number
console.log(Math.min(...prices)); // 3.99, spread operator was able to unpack the numerical values from the array to process with Math.min

// * Ex changing the original and copied array

const persons = [
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "John",
      age: 35,
    },
];

// Old way of copying persons
// const copiedPersons = persons.map((person) => ({
//     name: person.name,
//     age: person.age
// }));

// Using spread operator:
const copiedPersons = [...persons];

// Test using push on persons array, does copiedPersons change
persons.push({name: "Anna", age: 29});

console.log("Persons Array: ", persons); // Includes Anna object in array

console.log("Copied Persons Array: ", copiedPersons); // Copy does not include Anna, created before Anna was added