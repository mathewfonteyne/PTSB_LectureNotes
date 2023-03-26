/* 
    - Created a "helpers" folder --> helpers is a common folder name for helper functions/middleware/etc.

    - Middleware is essentially a function that accesses our request, response, and moves on to other aspects of our code(next).

    - Middleware can be customized to your projects needs.
*/

// Create a function called "logTime":
// This will have 3 parameters (request, response, next)
// Run logic in the code block {}

function logTime(req, res, next) {
  // We will only see/get the request obj in the console when we hit "send" in Postman
  // console.log(req);

  // TO DO: [] continue after being called, [x] create a date for when the request was made, [x] see/view the request date(from the huge request object)
  // creating a variable date with the Date datatype class constructor
  let date = new Date();
  let time = new Date();
  // The method we're using = creating a string for our local date
  req.datePosted = date.toLocaleDateString(); // Gets date
  req.timePosted = time.toLocaleTimeString(); // Gets time

  // Build a console.log to check it's working & show us the time of request
  console.log("Request datePosted key: ", req.datePosted);
  console.log("Request timePosted key: ", req.timePosted);

  // App continue out of the function and onto what's next
  next();
}

/* 
    - module.exports
        - exporting an object
        - we can make a variety of functions and store them with keys
        - how we can make functionality usable in other places
*/

module.exports = {
  logTime: logTime,
};
