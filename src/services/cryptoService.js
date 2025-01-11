const axios = require('axios'); // Import the axios library for making HTTP requests
const Crypto = require('../models/cryptoModel'); // Import the Crypto model for database operations

// Define an asynchronous function to fetch cryptocurrency data and store it in the database
const fetchCryptoData = async () => {
  try {
    // Define an array of cryptocurrency IDs to fetch data for
    const coins = ['bitcoin', 'matic-network', 'ethereum'];

    console.log(`Fetching data for ${coins.join(', ')}`); // Log the coins being fetched

    // Make a GET request to the CoinGecko API to fetch market data for the specified coins
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd', // Specify the currency to get prices in (USD)
        ids: coins.join(','), // Join the coin IDs into a comma-separated string
      },
    });

    // Iterate over the response data for each coin
    response.data.forEach(async (data) => {
      console.log(`Fetched data for ${data.id}:`, data); // Log the fetched data for each coin

      // Create a new instance of the Crypto model with the fetched data
      const crypto = new Crypto({
        coin: data.id, // Set the coin ID
        price: data.current_price, // Set the current price
        marketCap: data.market_cap, // Set the market capitalization
        change24h: data.price_change_percentage_24h, // Set the 24-hour price change percentage
      });

      // Save the new crypto data to the database
      await crypto.save();
      console.log(`Data for ${data.id} saved.`); // Log a message indicating the data was saved
    });

    console.log('Data fetched and stored successfully'); // Log a success message
  } catch (error) {
    // Handle any errors that occur during the data fetching process
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
  }
};

// Export the fetchCryptoData function so it can be used in other parts of the application
module.exports = fetchCryptoData;