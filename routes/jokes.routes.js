const express = require('express');
const router = express.Router();
const Joke = require('../models/joke.model');
const protect = require('../middlewares/authMiddleware.js');

// GET all jokes with filters
router.get('/',protect , async (req, res) => {
  try {
    const { type, search } = req.query;

    let filter = {};

    // filter by type (single or twopart)
    if (type) {
      filter.type = type;
    }

    // keyword search in joke, setup, or punchline
    if (search) {
      filter.$or = [
        { joke: { $regex: search, $options: 'i' } },
        { setup: { $regex: search, $options: 'i' } },
        { punchline: { $regex: search, $options: 'i' } }
      ];
    }

    const jokes = await Joke.find(filter);
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a random joke

router.get('/random', async (req, res) => {
try {
    const count = await Joke.countDocuments();
  const randomIndex = Math.floor(Math.random()*count);
  const randomJoke = await Joke.findOne().skip(randomIndex);
  res.json(randomJoke);
} catch (err) {
  res.status.json({error: err.message});
}


})

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
router.post('/', protect, async (req, res) => {
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
