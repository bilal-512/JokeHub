const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  joke: { type: String },
  setup: { type: String },
  punchline: { type: String }
});

module.exports = mongoose.model('Joke', jokeSchema);
