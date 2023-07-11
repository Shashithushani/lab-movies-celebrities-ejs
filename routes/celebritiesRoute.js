// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
// const { request } = require("../app");
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res) => {
  console.log(req.body);
  const data = req.body;
  try {
    const newCelebrity = await Celebrity.create(data);
    console.log(newCelebrity);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(error);
  }
});
router.get("/celebrities", async (req, res) => {
  try {
    const celeb = await Celebrity.find();
    res.render("celebrities/celebrities.ejs", { celeb });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
