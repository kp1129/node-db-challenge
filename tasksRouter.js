const express = require('express');
const router = express.Router();

// API endpoints to
// add tasks (must specify the project_id of an existing project)


// retrieve a list of tasks (the list of tasks should include the project name and project description)




// TEST
router.get('/', (req, res) => {
    res.status(200).json({ message: "hello from tasks!"})
});

module.exports = router;