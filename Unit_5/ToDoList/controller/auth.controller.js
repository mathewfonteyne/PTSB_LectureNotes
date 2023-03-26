const router = require("express").Router();

// Build a .post() with the url of /register: http://localhost:4000/todo/register
router.post("/register", (req, res) => {
  // Check that the middleware is running
  //   console.log("\nIn Auth Controller: ", req.datePosted, req.timePosted);
  // Check the Headers of the request
  //   console.log("Headers: ", req.headers);
  // Check the body of the request
  //   console.log("Body: ", req.body);

  try {
    // Dive into the req body and assign values to variables, object destructuring
    const { firstName, lastName, email, password } = req.body;

    console.log(potato); // Only here to test and trigger catch response

    res.status(200).send({
      fullName: `${firstName} ${lastName}`,
      email: email,
      // password: password, may not want our passwords to show..
      date: req.datePosted,
    });
  } catch (err) {
    res
      .status(500)
      .send(`<img src = "https://http.cat/500" alt = "Status code 500"/>`);
  }
});

module.exports = router;
