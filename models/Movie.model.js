const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: String,
  cast: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Celebrity",
    },
  ],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
