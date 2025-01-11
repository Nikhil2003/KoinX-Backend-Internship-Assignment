const mongoose = require('mongoose'); // Import the mongoose library for MongoDB interaction

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using mongoose
    await mongoose.connect('mongodb://localhost:27017/cryptoDB');
    console.log('MongoDB connected'); // Log a success message if the connection is successful
  } catch (error) {
    // Catch any errors that occur during the connection attempt
    console.error('MongoDB connection error:', error); // Log the error message
    process.exit(1); // Exit the process with a failure code
  }
};

// Export the connectDB function so it can be used in other parts of the application
module.exports = connectDB;