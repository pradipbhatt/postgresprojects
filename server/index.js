// index.js
import express from 'express';
import connectToDatabase from './postgres/postgres.js'; // Ensure correct path

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Call the database connection
connectToDatabase();
