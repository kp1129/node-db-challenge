const express = require('express');
const router = express.Router();

// API endpoints to 
// add resources



// retrieve resources





// TEST
router.get('/', (req, res) => {
    res.status(200).json({ message: "hello from resources!"})
});

module.exports = router;