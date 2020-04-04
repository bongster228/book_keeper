const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  collectionName: { type: String, required: true },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

module.exports = collectionSchema;
