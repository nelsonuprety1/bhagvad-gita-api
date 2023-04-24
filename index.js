const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const quoteControllers = require('./controllers/quoteControllers');

const app = express();

const PORT = process.env.PORT || 8000;

async function connect() {
  try {
    await mongoose.connect(config.mongoURI);
    console.log('Connected to mongo db');
  } catch (error) {
    console.error(error);
  }
}

connect();

// Call the insertQuotes function to insert the quotes into the database
quoteControllers()
  .then(() => {
    console.log('All quotes inserted.');
  })
  .catch(error => {
    console.error(error);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
