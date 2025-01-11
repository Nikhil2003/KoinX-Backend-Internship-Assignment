# KoinX Backend Internship Assignment

This project is a backend application developed as part of the KoinX Backend Internship Assignment. It is built using Node.js, Express, and MongoDB, and it fetches cryptocurrency data from the CoinGecko API.

## Features

- Fetches current price, market cap, and 24-hour change for Bitcoin, Matic, and Ethereum every 2 hours.
- Provides an API to retrieve the latest statistics for a specified cryptocurrency.
- Calculates and returns the standard deviation of the price for the last 100 records of a specified cryptocurrency.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Axios
- Node-cron
- Dotenv

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or accessible via a cloud service like MongoDB Atlas.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/koinx-backend-assignment.git
   cd koinx-backend-assignment


2. Install the dependencies:


npm install

3. Set up your environment variables. Create a .env file in the root directory and add any necessary configuration, such as your MongoDB connection string.

4. Start the application in development mode:

npm run dev

This command will run the backend server using nodemon, which automatically restarts the server when file changes are detected, making it ideal for development.

5. (Optional) To run the server without automatic restarts, you can use:

npm start
This command will run the server using Node.js without nodemon.

This setup will allow you to run the backend application and start interacting with the API endpoints efficiently during development.


This README now includes instructions for using `npm run dev` to start the application in development mode, leveraging `nodemon` for automatic restarts on file changes.

