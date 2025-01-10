// index.js
import express from 'express';
import connectToDatabase from './postgres/postgres.js'; // Ensure correct path
import userRoutes from './routes/userRoutes.js'; // Import the user routes

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the user routes for the /api endpoint
app.use('/api', userRoutes);

// Call the database connection
connectToDatabase();

// Set the port and start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
