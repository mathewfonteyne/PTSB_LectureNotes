// ? Scope: determines the accessability (visibility) of variables/functions to JavaScript

/* 
    JS's 3 types of scope:
    - Block Scope
        - Defined by curly brackets { } to group elements or statements, block scope is also provided by let and const, ex. "code block"
    - Function Scope 
        - each function creates a new scope: variables inside functions are not accessible outside the function, also known as Local Scope
    - Global Scope 
        - variable declared outside a function is Global: all scripts and functions can access the variable
*/

let globalVariable = true;
console.log("Outside of function: " + globalVariable)

function checkGlobalVariable() {
    console.log("Inside of function: " + globalVariable);
}

checkGlobalVariable();

// Global Variable
let x = 12;

function scope() {
    // Local variable
    let x = 33;
    console.log(x);
}

scope(); // 33
console.log(x); // 12

// Example 2

let y = 13;

function newScope() {
    y = 33;
    console.log(`In the newScope function: ${y}`);
    let z = 45;
    console.log(`In the newScope function: ${z}`);
}

newScope();
console.log(`Out of the function/globally: ${y}`); // 1200
// console.log(`Out of the newScope function: ${z}`); // Z is not defined, local variable to the function only

// ? Var vs Let
/* 
    Variable keywords:
        - const: cannot be reassigned
        - var: scoped to nearest function block
        - let: scoped to the nearest enclosing block
*/

// * Var example - scoped to function block, variable declared inside {} can be accessed from outside the block

var a = 12;

function varTest() {
    var a = 33;

    if (true) {
        var a = 45;
        console.log(`Var - within If: ${a}`);
    }

    console.log(`Var - outside If, inside function: ${a}`);
}

varTest();
console.log(`Var - Outside Function/Globally: ${a}`);

/*
 * Let Example - scoped to enclosing block, variable declared inside of a { } block cannot be accessed outside the block.
 */

let b = 12;

function letTest() {
    let b = 100;
    console.log(`Let - start of function: ${b}`); // 100

    if (true) {
        let b = 50;
        console.log(`Let - within If: ${b}`); // 50
    }

    console.log(`Let - end of function: ${b}`); // 100
}

letTest();
console.log(`Let - Outside Function/Global value: ${b}`); // 12

// ? Hoisting: JS's default behavior of moving declarations to the top of the current scope (to the top of the current script/function/file)

/* 
    - JS reads from top to bottom in two passes. Line by line.
        1st pass:
            - Made by the compiler. This is where hoisting is initiated.
            - compiled for execution.
        2nd pass: 
            - variables are assigned.
            - Execution phase
                - runs any hoisted code.

    JavaScript only hoists declarations(let a;), not initializations(a = 10; let a = 10;).

    To avoid bugs, always declare all variables at the beginning of every scope.
*/

//console.log(`Before: ${personName}`); // ReferenceError: Cannot access 'personName' before initialization
let personName = "Cory";
console.log(`After: ${personName}`); // runs/works

b();

function b() {
    console.log("I'm hoisted");
}

b();

// newFunc(); // Cannot access 'newFunc' before initialization

let newFunc = () => {
    console.log("Hoisted?");
}

newFunc();