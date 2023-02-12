/* 
!   Async/Await
        - Introduced in 2017
        - Can make any function an async function simply by denoting as such.
        Keywords:
            - async
                - denotes an async function
            - await
                - calls a process to "wait" for our results.
        
        - Can help us reduce the need for Callback Functions
        - CANNOT be used in loops!
        - ALWAYS returns a promise.
*/

// Async Function Declaration
async function asyncFunctionName() {
    //code to run
}

// Async Function Expression
let funcExpressionName = async function () {
    // code block
}

// Async Arrow Function
let arrowFunctionName = async () => {
    // code to execute
}

async function getName() {
    return "Gandalf";
}

// console.log(getName());
getName().then((name) => console.log(name));

/* 
! Await
    - Tell JS that a promise is being returned and to wait on that result.
*/

