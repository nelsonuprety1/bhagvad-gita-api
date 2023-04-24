const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const quoteControllers = require('./controllers/quoteControllers');
const Quote = require('./models/quoteModel');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

async function connect() {
  try {
    await mongoose.connect(config.mongoURI);
    console.log('Connected to mongo db');
  } catch (error) {
    console.error(error);
  }
}

connect();

//  insert the quotes into the database
quoteControllers()
  .then(() => {
    console.log('All quotes inserted.');
  })
  .catch(error => {
    console.error(error);
  });

// Home route
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to Bhagavad Gita Quotes API</h1>
            <p>This API provides quotes from the Bhagavad Gita.</p>
            <p>Please refer to the <a href="https://github.com/nelsonuprety1/bhagvad-gita-api/blob/main/README.md" target="_blank">API documentation</a> for more information.</p>`);
});

//   Api route endpoints
app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find().select({ _id: 0, __v: 0 });
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get one random quote
const getRandomQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(rand).select('-_id -__v');
    res.send(quote);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

app.get('/api/quotes/random', getRandomQuote);

// Find by id
app.get('/api/quotes/:id', async (req, res) => {
  try {
    const quote = await Quote.findOne({ id: req.params.id }).select(
      '-_id -__v'
    );
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    res.json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
