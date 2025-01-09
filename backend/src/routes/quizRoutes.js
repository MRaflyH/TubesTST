const express = require('express');
const apiKeyAuth = require('../middleware/apiKeyAuth');

const router = express.Router();

// Protected route
router.get('/', apiKeyAuth, (req, res) => {
    res.json({ message: 'Access granted. API key is valid!' });
});

module.exports = router;
