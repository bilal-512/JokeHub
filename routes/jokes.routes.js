const express = require('express');
const router = express.Router();
const Joke = require('../models/joke.model');

// 1. GETing all jokes
router.get('/', async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. GET one joke by ID
router.get('/:id', async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) return res.status(404).json({ error: "Joke not found" });
    res.json(joke);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// 3. CREATE new joke
router.post('/', async (req, res) => {
  try {
    const newJoke = new Joke(req.body);
    await newJoke.save();
    res.status(201).json(newJoke);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 4. UPDATE a joke by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedJoke = await Joke.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedJoke) return res.status(404).json({ error: "Joke not found" });
    res.json(updatedJoke);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 5. DELETE a joke by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedJoke = await Joke.findByIdAndDelete(req.params.id);
    if (!deletedJoke) return res.status(404).json({ error: "Joke not found" });
    res.json({ message: "Joke deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
