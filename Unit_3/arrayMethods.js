// ? Array Methods, awesome way to do things with or to arrays

let food = ["Pasta", "Pizza", "Cereal", "Burrito"]

for(item of food) {
    console.log(item);
}

// * .push(), adds item to the end of an array

food.push("Soup", "Cheesecake");
console.log("Push Method: ", food) // Push Method:  [ 'Pasta', 'Pizza', 'Cereal', 'Burrito', 'Soup', 'Cheesecake' ]

console.log(food[2]); // Cereal

// * .splice(), splice(indices of where to remove, how many to remove, what to replace with/add)

food.splice(1, 1, "Apple");
console.log("Splice Method: ", food);

food.splice(1, 0, "Steak");
console.log("Second Splice Method: ", food);

// * .pop(), removes value from the end of an array

food.pop();
console.log("Pop Method: ", food);

// * .shift(), removes teh fist value of an array(value in first position)
food.shift();
console.log("Shift Method: ", food);

// * .unshift(), adds to the front of an array, can include multiple items.
food.unshift("Cake", "Sushi", "Stir fry");
console.log("Unshift Method: ", food);

// .length, property not method
console.log(food.length);

// * .toString, returns a string representation of the array
let rgb = ["red", "green", "blue"];
console.log("ToString Method: ", rgb.toString());

//! Iteration Methods
/* 
    ? .filter() & .includes()
    - does not destroy the original array
    - we typically store the filter array in a new variable
    - takes a callback function that returns either true or false
        - A callback function is another function that we invoke within our main function(nested function)
    - loops through array
    - MUST have a return
*/

let fruits = ["Kiwi", "Peach", "Banana", "Papaya", "Mango"];

// Use filter to remove peach

let filteredFruit = fruits.filter((fruit) => {
    let remainingFruit = fruit !== "Peach";
    console.log(`Remaining fruit: ${remainingFruit}`);
    return remainingFruit;
});

console.log(filteredFruit);

// .includes(), remove any fruit with "P"
let otherFruit = "Pineapple";

console.log("Includes Method: ", fruits.includes("P")); // false, .includes done on one item at a time (single value at a time)
console.log("Includes Method: ", otherFruit.includes("P")); // true
console.log("Includes Method: ", otherFruit.includes("apple")); // true

// .filter with .includes, remove any fruit with "P"

const filterFruit2 = fruits.filter((item) => !item.includes("P"));
console.log(filterFruit2);

// set the filtered array to variable, filter will run eatMango function per item in the array
const filteredFruitFunctionEx = fruits.filter(eatMango);

// returns true if not mango, returns false if mango
function eatMango(fruit) {
    return fruit !== "Mango"
}

// printing to see final filtered array
console.log("Filter with function example: ", filteredFruitFunctionEx);

// console.log(eatMango("Baseball")) // demo function

//----------------------------------------------

//? .forEach()
/* 
    Runs three arguments:
    - The value
    - The index
    - The array object itself

    - forEach() helps us to iterate over an array performing a function once per element in the array via a callback function.
    - Is not executed for empty elements.
    - Does not change the original array
*/

let newFoodList = ["apple", "pear", "mushrooms", "cheese", "spaghetti"];

// for (let i = 0; i < newFoodList.length; i++) {
//     console.log(newFoodList[i]);
// }

// arrow function with concise body
// newFoodList.forEach((item) => console.log("ForEach Method: ", item));

// arrow function with block body
newFoodList.forEach((item, i) => {
    console.log("ForEach with Index:", item, i);
})

// Declarative Function
newFoodList.forEach(function (item) {
    console.log("Declaration Sample: ", item);
})

// Build a function to console.log item
// Separating function from forEach, works
function displayFoodItem(foodThing) {
    console.log(`Function outside of forEach: ${foodThing}.`);
}

// Pass our forEach method the function
newFoodList.forEach(displayFoodItem);

//----------------------------------------------------------------

//? .map()
/* 
    - Creates a new array from calling a function for every array element
    - Calls the function once oer element in an array
    - Does nots execute the function for empty elements
    - Does not change the original array
*/

// Populated by for loop
let numArray = [];
// Populate by using .map() on numArray
let fizzBuzzArray = [];

for (let k = 0; k <= 25; k++) {
    numArray.push(k);
}
// Checking if numArray was populated
console.log("numArray: ", numArray);

// Simple ex first
// numArray.map((x) => fizzBuzzArray.push(x));
numArray.map((x) => fizzBuzzArray.push(x + 5));

// If divisible by 3, print fizz, if divisible by 5, print buzz, if divisible by 3 and 5, print # (push to fizzBuzzArray)
numArray.map((x) => {
    // Use a conditional to check division
    if (x % 15 === 0) {
        fizzBuzzArray.push(x)
    } else if (x % 3 === 0) {
        fizzBuzzArray.push("Fizz");
    } else if (x % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    }
})

// Check if fizzBuzzArray populated
console.log("fizzBuzzArray: ", fizzBuzzArray);

// ? ---------- map vs forEach example ------------

let mainArr = [1, 2, 3, 4];

// .forEach() does not return anything, performs an action on each item, does not return a value
let forEachEx = mainArr.forEach((i) => i);
console.log("ForEach Example: ", forEachEx);

// .map() returns a new array, perform action & creates/returns new value
// let mapEx = mainArr.map((i) => i);
let mapEx = mainArr.map((i) => i + 3);
console.log("Map Ex: ", mapEx);

let secondMap = mapEx.map((i) => i + 5);
console.log("Second Map Ex: ", secondMap);
console.log(mainArr);

// --------------------------------

//? .find()
/* 
  - Executes a function for each array element and returns the value of the first element that passes a test.
  - Returns undefined if no elements are found.
  - Does not execute the function for empty elements.
  - Does not change the original array.
*/

let tmnt = ["Mikey", "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"];

let character = "Leo";
console.log(
    "Find Ex 1: ",
    tmnt.find((c) => c === character)
);

character = "April";
console.log(
    "Find Ex 2: ",
    tmnt.find((c) => c === character)
);

character = "Splinter"; // find will return true for Splinter versus the value Splinter because we checked all items via including the index
console.log(
    "Find Ex 3: ",
    tmnt.find((c, i) => console.log(
        "Character: ",
        c === character,
        "Index: ",
        i
    ))
);