// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require("../models/Movie.model");

router.get("/movies/create", (req, res, next) => {
  res.render("movies/new-movies");
});

router.post("/movies/create", async (req, res, next) => {
  console.log(req.body);
  const data = req.body;
  try {
    const newMovie = await Movie.create(data);
    console.log(newMovie);
    res.redirect("/movies");
  } catch (error) {
    console.log(error);
  }
});
router.get("/movies", async (req, res, next) => {
  try {
    const movieAll = await Movie.find();
    res.render("movies/movies.ejs", movieAll);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
