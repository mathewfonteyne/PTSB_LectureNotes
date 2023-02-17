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