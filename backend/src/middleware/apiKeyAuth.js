const dotenv = require('dotenv');
dotenv.config();

// Middleware to validate API key
const apiKeyAuth = (req, res, next) => {
    const apiKey = req.header('x-api-key'); // Get API key from request header
    const validApiKey = process.env.API_KEY; // Get valid key from environment variables

    if (!apiKey) {
        return res.status(401).json({ error: 'API key is missing' });
    }

    if (apiKey !== validApiKey) {
        return res.status(403).json({ error: 'Invalid API key' });
    }

    next(); // Proceed to the next middleware or route
};

module.exports = apiKeyAuth;
