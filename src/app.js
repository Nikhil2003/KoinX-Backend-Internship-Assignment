const express = require('express');
const cron = require('node-cron');
const connectDB = require('./config/db');
const cryptoRoutes = require('./routes/cryptoRoutes');
const fetchCryptoData = require('./services/cryptoService');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api', cryptoRoutes);

// Schedule the job to run every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});