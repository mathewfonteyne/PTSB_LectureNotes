const router = require("express").Router();
const db = require("../helpers/db.json");
const fs = require("fs");
const fsPath = "./helpers/db.json";

// GET ALL ROUTE - Read
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
// GET One By ID - Read
router.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    let character = db.filter((obj) => obj.id == id);

    res.status(200).json({
      status: `Found character at id: ${id}`,
      character,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
// GET ALL By Class - Read
router.get("/class/:class", (req, res) => {
  try {
    const characterClass = req.params.class;

    let charResults = db.filter(
      (obj) => obj.classType.toLowerCase() === characterClass.toLowerCase()
    );

    if (charResults.length === 0) {
      res.status(401).json({
        message: `There are no ${characterClass}s`,
      });
    }

    res.status(200).json({
      characters: charResults,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
// POST One - Create http://localhost:4001/characters/create
router.post("/create", (req, res) => {
  try {
    // Object Destructuring to help individually grab the keys and values (properties) of our character object coming from req.body
    let { name, classType, age, race, npc } = req.body;

    // Use math to create an ID for the new character
    let newId = db.length + 1;

    // Declare and assign newChar object
    const newCharacter = {
      id: newId,
      name,
      classType,
      age,
      race,
      npc,
      level: 1,
    };

    fs.readFile(fsPath, (err, data) => {
      if (err) throw err;

      const database = JSON.parse(data);

      // Create a way to make sure nothing has the same ID
      // console.log(
      //   "ID values: ",
      //   database.filter((d) => {
      //     if (d) {
      //       return d.id;
      //     }
      //   })
      // );

      let currentIDs = [];

      database.forEach((obj) => {
        currentIDs.push(obj.id);
      });

      if (currentIDs.includes(newId)) {
        let maxValue = Math.max(...currentIDs);
        newId = maxValue + 1;
        newCharacter.id = newId;
      }

      database.push(newCharacter);

      fs.writeFile(fsPath, JSON.stringify(database), (err) => console.log(err));

      res.status(200).json({
        status: `Created new character ${newCharacter.name}!`,
        newCharacter,
      });
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// PUT One By ID - Update
router.put("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    const updatedInfo = req.body;

    fs.readFile(fsPath, (err, data) => {
      if (err) throw err;

      const database = JSON.parse(data);

      let character;

      database.forEach((obj, i) => {
        if (obj.id === id) {
          let buildObj = {};

          for (key in obj) {
            if (updatedInfo[key]) {
              console.log("Checked");

              buildObj[key] = updatedInfo[key];
            } else {
              buildObj[key] = obj[key];
            }
          }
          database[i] = buildObj;
          character = buildObj;
        }
      });

      // Error message for if that ID isn't in the DB
      if (Object.keys(character).length <= 0)
        res.status(404).json({ message: "No character in roster" });

      fs.writeFile(fsPath, JSON.stringify(database), (err) => console.log(err));

      res.status(200).json({
        status: `Modifies character at ID: ${id}.`,
        character: character,
      });
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
// DELETE One By ID - Delete
router.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    fs.readFile(fsPath, (err, data) => {
      if (err) throw err;
      const db = JSON.parse(data);

      const filteredDb = db.filter((i) => i.id !== id);

      fs.writeFile(fsPath, JSON.stringify(filteredDb), (err) =>
        console.log(err)
      );

      res.status(200).json({
        status: `ID: Character at ${id} was successfully deleted.`,
      });
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
module.exports = router;
