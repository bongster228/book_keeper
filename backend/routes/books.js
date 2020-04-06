const router = require('express').Router();
const Book = require('../models/book');

// Get Route
router.route('/').get(async (req, res) => {
  try {
    const data = await Book.find();
    res.json(data);
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

// Post Route
router.route('/add').post(async (req, res) => {
  const { book } = req.body;

  const newBook = await Book.create(book);

  try {
    await newBook.save();
    res.json('Book created');
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

// Edit Route
router.route('/edit/:id').post(async (req, res) => {
  const { id } = req.params;
  const { updatedBook } = req.body;

  try {
    await Book.findByIdAndUpdate(id, updatedBook);
    res.json('Book Updated');
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

// Delete Route
router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;

  try {
    await Book.findByIdAndRemove(id);
    res.json('Book Deleted');
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

module.exports = router;
