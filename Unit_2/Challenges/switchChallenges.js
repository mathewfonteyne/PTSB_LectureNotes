/*
! Switch Challenge:
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

/* 
!   Is It Prime, Even, or just a Number? Switch Challenge
*   Provided:
        - a variable named "value" that is undefined.
        - a variable named "randomNumber" that generates a random value between 1-10.
    
*    Your Challenge:    
    Create a Switch Statement that passes the randomNumber in as a expression.
        - With cases that are 2, 3, 5, 7
            - assign the value variable with "Prime".
        - With cases that are 4, 6, 8, 10
            - assign the value variable with "Even".
        - As a default
            - assign the value the randomNumber
    
    Outside of the switch statement
        - console log the value variable
*/

let value;
let randomNumber = Math.floor(Math.random() * 10 + 1);