const router = require("express").Router();
// We need to import our model so that we have access to the document schema (get directions on how to build the data)
const User = require("../models/user.model");

/* 
    ** IMPORTANT NOTE **
    It is required to use async/await with our callback functions per MongoDB.
        - It's a good idea regardless to do this simply because we are using request outside of our own workstation.
    We will build the rest of the endpoint/route with a request as response as we did in the last unit. Await/Async is the only new addition. 
*/

router.post("/signup", async (req, res) => {
  // res.send("Connected");
  try {
    // Creating a new object based off the Model Schema.
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }); // using values from req.body to form our object.
    const newUser = await user.save(); // Writes to database. Returns a response - why it should be an "await".
    res.status(200).json({
      user: newUser,
      message: "Success! User Created!",
    });
  } catch (err) {
    res.status(500).json({
      ERROR: err.message,
    });
  }
});

module.exports = router;
