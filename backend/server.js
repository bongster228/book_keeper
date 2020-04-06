const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// Require Routes
const booksRoutes = require('./routes/books');

const PORT = process.env.PORT || 5000;
const app = express();

// CONFIG APP
app.use(cors());
app.use(express.json());

// CONFIG MONGOOSE
const uri = process.env.DATABASE_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to DB');
});

// CONFIG ROUTES
app.use('/books', booksRoutes);

// START SERVER
app.listen(PORT, () => {
  console.log('Server started');
});
