const mongoose = require('mongoose'); // Import the mongoose library for MongoDB interaction

// Define a schema for the 'Crypto' collection in MongoDB
const cryptoSchema = new mongoose.Schema({
  coin: String, // The name or symbol of the cryptocurrency (e.g., 'BTC' for Bitcoin)
  price: Number, // The current price of the cryptocurrency
  marketCap: Number, // The market capitalization of the cryptocurrency
  change24h: Number, // The percentage change in price over the last 24 hours
  timestamp: { type: Date, default: Date.now }, // The timestamp of the record, defaulting to the current date and time
});

// Export the model based on the schema, allowing it to be used in other parts of the application
module.exports = mongoose.model('Crypto', cryptoSchema);