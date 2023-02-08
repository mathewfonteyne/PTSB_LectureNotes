// ? Loops
/* 
    Loops through a block of code a number of times.
    
    If stuck in an accidental infinitely running loop:
        -ctrl+c, cmd+z, red stop button from "code runner"
    
    ? For Loop:
        Takes in 3 parameters (the things within the () )
            - initial expression
            - condition
            - increment expression
        
    Structure:
    for (initial expression ; condition ; increment expression) {
        ...code block of logic
    }
*/

for (i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("Finished with loop");

for (i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (i = 10; i >= 0; i--) {
    console.log(i);
}

for (i = 10; i > 0; i--) console.log(i); // if using a straight return, don't have to use curly brackets {}

let firstName = "Mathew";

for (let i = 0; i < firstName.length; i++) {
    console.log(i, firstName[i]);
}

let sum = 0;

for (let i = 1; i <= 5; i++) {
    console.log("Before: ", sum);
    sum += i;
    console.log("After: ", sum);
}

console.log(sum);

// ? For In Loops: loops through the properties of an object
/* 
    Structure:
    for (key in object) {
        ...code to run
    }

    ^key is a random variable name of our choice, object is the name of the object we are targeting.
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript"
};

console.log(student["name"]); // pulls out the value "name" from the object, "name" is the key

for (item in student) {
    console.log(item); // printed each key in the object
    console.log(student[item]); // printed each value of each key
}

// Variable name for key can be whatever we want, still runs
// for (pizza in student) {
//     console.log(pizza); // printed each key in the object
//     console.log(student[pizza]); // printed each value of each key
// }

let catArray = [
    "tabby",
    "british shorthair",
    "burmese",
    "maine coon",
    "rag doll",
  ];

/* 
    ! For in can be used on objects and arrays, but if array index order is important it's better to use a for loop, for of loop, or Array.forEach() method.
*/  

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
};

// ? For Of Loops: loops through the values of of an iterable object
/* 
    iterable - an object that has iterable properties

    Structure:
    for (variable of iterable) {
        ...code to execute/run
    }

    ^variable is any word we choose to use, iterable is the name of any iterable "thing"

    Can loop over Arrays, Strings, etc.
*/

// For Of doesn't play with Objects
// for (item of student) {
//     console.log(item);
// }

for (cat of catArray) {
    console.log("FOR OF LOOP: ", cat);
}

for (bubbles of catArray) {
    if (bubbles === "maine coon") {
        console.log(`My favorite is the ${bubbles}!!!`);
    } else {
        console.log("Not a maine coon...:(");
    }
}