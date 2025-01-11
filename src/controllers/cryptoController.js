const Crypto = require('../models/cryptoModel'); // Import the Crypto model for database operations

// Function to get the latest statistics for a specific cryptocurrency
exports.getStats = async (req, res) => {
  const { coin } = req.query; // Extract the 'coin' parameter from the query string
  try {
    // Find the latest record for the specified coin, sorted by timestamp in descending order
    const latestData = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
    if (!latestData) {
      // If no data is found, respond with a 404 status and an error message
      return res.status(404).json({ error: 'Data not found' });
    }
    // Respond with the latest price, market cap, and 24-hour change
    res.json({
      price: latestData.price,
      marketCap: latestData.marketCap,
      '24hChange': latestData.change24h,
    });
  } catch (error) {
    // Handle any errors that occur during the database query
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to calculate the standard deviation of the last 100 price records for a specific cryptocurrency
exports.getDeviation = async (req, res) => {
  const { coin } = req.query; // Extract the 'coin' parameter from the query string
  try {
    // Retrieve the last 100 records for the specified coin, sorted by timestamp in descending order
    const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
    if (records.length < 2) {
      // If there are fewer than 2 records, respond with a 400 status and an error message
      return res.status(400).json({ error: 'Not enough data to calculate deviation' });
    }
    // Extract the prices from the records
    const prices = records.map(record => record.price);
    // Calculate the mean (average) price
    const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
    // Calculate the variance
    const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / prices.length;
    // Calculate the standard deviation as the square root of the variance
    const deviation = Math.sqrt(variance);
    // Respond with the calculated deviation, rounded to two decimal places
    res.json({ deviation: deviation.toFixed(2) });
  } catch (error) {
    // Handle any errors that occur during the database query
    res.status(500).json({ error: 'Internal server error' });
  }
};