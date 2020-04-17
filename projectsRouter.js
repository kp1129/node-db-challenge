const express = require('express');
const router = express.Router();

// API endpoints to
// add projects


// retrieve projects




// TEST
router.get('/', (req, res) => {
    res.status(200).json({ message: "hello from projects!"})
});

module.exports = router;