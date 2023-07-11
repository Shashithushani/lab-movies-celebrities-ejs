//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  ocupation: String,

  catchPhrase: {
    type: String,
    required: true,
  },
});

const Celebrity = mongoose.model("Celibrity", celebritySchema);

module.exports = Celebrity;
