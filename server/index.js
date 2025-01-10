import express from 'express';
import dotenv from 'dotenv'; // Import dotenv to handle environment variables
import cors from 'cors';
import cookieParser from 'cookie-parser'; // Import cookie-parser to handle cookies
import connectToDatabase from './postgres/postgres.js'; // Ensure correct path
import userRoutes from './routes/userRoutes.js'; // Import the user routes
import articleRoutes from './routes/articleRoutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());
// Use CORS middleware to allow requests from all origins
app.use(cors());

// Use the user routes for the /api endpoint
app.use('/api', userRoutes);
app.use('/api', articleRoutes);

// Call the database connection
connectToDatabase();

// Set the port and start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
