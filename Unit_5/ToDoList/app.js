// Access Express & it's methods; we can do that via require()
const express = require("express"); // Being pulled from node modules
// We want a simple var to make calls, set express to app
const app = express(); // Simplify our method calls
// Create a PORT number to run the app/server on our local machine
// Server port within localhost. Using "all caps" indicates a "general" variable.
const PORT = 4000;
// Create a variable that imports the practice controller (gives app.js access to it)
const practiceController = require("./controller/practice.controller");


// Provide us access to use JSON within our routes
// Call on our app var, use the .use() method to tell or app: express.json() (use JSON please express)
app.use(express.json());

// Use a method called .use(), this points our express app to where it should go
// Call the app var, use the .use() method, specify using express to target the public folder, note: When a file is not specified, JS always defaults to seeking an index file.
// __dirname comes from node (it's accessible whenever)
app.use(express.static(`${__dirname}/public`));
console.log(`pathway: `, __dirname); // route us to the public folder

// Building route to practice controller
// First we will call on our app var, then we will use the .use() method, we pass use a string that becomes the url route and the controller that route takes you to.
/* 
    Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js.
    ex: localhost:4000/practice
*/
app.use("/practice", practiceController);

// Create a method that "listens" for us spinning up/starting our application
// This will need our PORT # and a callback function
// First call our app var, use the .listen method, pass that method the port var and create a callback (CB) function to give us some feedback(console.log) to affirm it's running
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// To start server, in terminal at the project directory(the folder) run command "nodemon"