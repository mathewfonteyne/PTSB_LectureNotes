const router = require("express").Router();
// Access our "db" by requiring it in
const db = require("../helpers/db.json");
// FS library pulled from Node. This allows us to manipulate files.
const fs = require("fs");

/* 
    What Parameters are for:
    - Search parameters
    - To help us target a specific set of data so that we can find one to update or delete
*/
// To Do: build a route to GET one item from the "db"
/* 
    Syntax:
        URL:   /:id
        - The : denotes a parameter value. The endpoint is thus expecting a reference value (to take in a value)
        Ex: /3 then id = 3

        example URL w/ a parameter:
        http://localhost:4000/routes/1

        - "1" would reference a parameter or flexible string
            - This could be a name of something or anything we want
            - It all depends on how we build our logic.

        IDs: usually a db will create an id automatically per data item
            - IDs are meant to be a unique value: we target it because it is unique to the data
*/
router.get("/:id", (req, res) => {
  //   console.log(req.url); // Show us our endpoint
  // Detail a object with a key of "id" (our parameter name) & the value within the URL we passed to it
  //   console.log(req.params);
  /* 
        - used to help us locate one item in our database.
        - ID typically has a unique value to help us find that ONE item.
        - Can help us search several items.
    */
  try {
    // Use object destructuring so id is equal to our /#, /:id
    let { id } = req.params;
    // Setting the variable results to equal whatever item in the DB has the same id as the variable id's value. .filter() method checks each item in the array until it finds the one who's id matches
    let results = db.filter((i) => i.id == id);
    // console.log("Results: ", results);
    res.status(200).json({
      status: `Found item at ID: ${id}`,
      results,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// To Do: build a route to GET all items from the "db"
router.get("/", (req, res) => {
  try {
    res.status(200).json({
      results: db,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// To Do: build a route to POST a new to do list item
router.post("/", (req, res) => {
  try {
    // We want to grab data from the req body (via Postman), console.log
    const toDoItem = req.body;
    // console.log(toDoItem);

    // 1. The path needs to be be relative to where fs is located (node_modules), NOT from the controllers location.
    //                 1
    fs.readFile("./helpers/db.json", (err, data) => {
      // quick conditional to deal with any error it comes across
      if (err) throw err;

      // Parses the JSON file and provides an array of our objects back so we can manipulate it
      const db = JSON.parse(data);

      // push the object supplied by the body to our array.
      db.push(toDoItem);

      // Write to our JSON file
      fs.writeFile("./helpers/db.json", JSON.stringify(db), (err) =>
        console.log(err)
      );
      /* 
                - Requires
                    - route to original file (same pathway as readFile)
                    - what needs to be included or written
                        - We are making out array BACK into a JSON format and stringify-ing it. It requires whatever data we desire.
                    - Callback function to handle errors
        */
      res.status(200).json({
        status: "New item added to DB!",
        toDoItem,
      });
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
module.exports = router;
