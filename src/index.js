import dotenv from 'dotenv';
import connectDB from './db/index.js';

// Load environment variables from the .env file
dotenv.config(); // Assumes .env is in the root directory

// Connect to the database
connectDB();

// Your application logic here
