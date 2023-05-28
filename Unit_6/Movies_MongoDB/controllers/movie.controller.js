const router = require("express").Router();

const Movie = require("../models/movie.model");

// Way to use validate session directly in the controller and endpoints:
const validateSession = require("../middleware/validate-session");

// Error Response Function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

//TODO POST
// http://localhost:4000/movies/
// * Adding validate session to graB user._id from token to save to DB
router.post("/", validateSession, async (req, res) => {
  try {
    //1. Pull data from client (body)
    const { title, genre, rating, length, releaseYear } = req.body;
    //2. Create a new object using the Model
    const movie = new Movie({
      //   title: req.body.title,
      //   genre: req.body.genre,
      //   rating: req.body.rating,
      //   length: req.body.length,
      //   releaseYear: req.body.releaseYear,
      title,
      genre,
      rating,
      length,
      releaseYear,
      owner_id: req.user._id,
    });
    //3. Use mongoose method to save to MongoDB
    const newMovie = await movie.save();
    //4. client response
    res.status(200).json({
      movie: newMovie,
      message: "Success! New Movie Added",
    });
  } catch (err) {
    errorResponse(res, err);
  }
});

//TODO GET One
/* 
   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js

*/

router.get("/:id", async (req, res) => {
  // http://localhost:4000/movies/643c61a63353c1729ba83387
  try {
    // grab parameters from url
    const { id } = req.params;

    // Find the document (movie JSON obj) within the DB Collection
    const getMovie = await Movie.findOne({ _id: id });

    // Response message
    // if (!movie) throw new Error("No Movie Found!");
    // res.status(200).json({
    //   message: `${getMovie.title} was found!`,
    //   getMovie,
    // });
    getMovie
      ? res.status(200).json({
          msg: `${getMovie.title} was found!`,
          getMovie,
        })
      : res.status(404).json({
          message: "No movie found.",
        });
  } catch (err) {
    errorResponse(res, err);
  }
});
//TODO Get All
/* 
   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        
        
        Hint: parameters within method are optional
*/
// * Adding validate session by passing it in as a parameter for the endpoint
router.get("/", validateSession, async (req, res) => {
  //  http://localhost:4000/movies/
  try {
    // This endpoint will only return all movies
    // Await all documents from the movie collection
    const getAllMovies = await Movie.find();
    if (!getAllMovies) throw new Error("No Movies Found");
    res.status(200).json({
      message: "All Movies!",
      getAllMovies,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});
//TODO Get All by Genre
/* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
*/

router.get("/genre/:genre", async (req, res) => {
  try {
    // Grab genre value from parameters
    const { genre } = req.params;

    // Trying to spell genres the same way...
    // if (genre) {
    //   for (let i = 0; i < genre.length; i++) {
    //     i === 0
    //       ? (buildWord = genre[i].toUpperCase())
    //       : (buildWord += genre[i].toLowerCase());
    //   }
    // }

    // Finding all movies in DB whose genre matches the params ({db genre key: req.params.genre})
    const getMovies = await Movie.find({ genre: genre });

    getMovies.length > 0
      ? res.status(200).json({
          getMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
  } catch (err) {
    errorResponse(res, err);
  }
});
//TODO PATCH One
// * Adding validate session to make sure the the movie also belongs to the logged in user
router.patch("/:id", validateSession, async (req, res) => {
  try {
    //1. Pull value from parameter
    // const { id } = req.params;
    // Create a filter to check both id from reg.params & owner_id against id from token
    const filter = { _id: req.params.id, owner_id: req.user._id };

    //2. Pull data from the body.
    const info = req.body;
    const returnOption = { new: true };
    //3. Use method to locate document based off ID and pass in new information.
    //* findOneAndUpdate(query, document, options)
    // returnOptions allows us to view the updated document
    const update = await Movie.findOneAndUpdate(filter, info, returnOption);
    // if (!update) throw new Error("ID Not Found!");
    //4. Respond to client.
    res.status(200).json({
      message: "Successfully Updated!",
      update,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});
//TODO Delete One
// * Adding validate session to make sure the the movie also belongs to the logged in user
router.delete("/:id", validateSession, async (req, res) => {
  try {
    //1. Capture ID
    const { id } = req.params;
    //2. use delete method to locate and remove based off ID
    const deletedMovie = await Movie.deleteOne({
      _id: id,
      owner_id: req.user._id,
    });
    // if (!deletedMovie) throw new Error("No Movie Found!");
    //3. Respond to Client with a ternary
    deletedMovie.deletedCount
      ? res.status(200).json({
          message: "Successfully Deleted!",
        })
      : res.status(404).json({
          message: "No Movie in the collection was found!",
        });
  } catch (err) {
    errorResponse(res, err);
  }
});
module.exports = router;
