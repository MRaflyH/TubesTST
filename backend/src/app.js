const express = require('express');
const dotenv = require('dotenv');
const quizRoutes = require('./routes/quizRoutes'); // Import quiz routes

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/quiz', quizRoutes); // Use quiz routes for '/api/v1/quiz'

// Default route
app.get('/', (req, res) => res.send('API is running'));

module.exports = app;

