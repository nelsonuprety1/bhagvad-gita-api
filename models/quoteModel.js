const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Lord Krishna',
  },
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
