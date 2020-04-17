const express = require('express');
const Tasks = require('./tasksModel');
const router = express.Router();

// API endpoints to
// add tasks (must specify the project_id of an existing project)
router.post('/', (req, res) => {
    const newTask = req.body;
    if(!newTask.description || !newTask.project_id){
        res.status(400).json({ errorMessage: "please provide task description and project_id" })
    } else {
        Tasks.add(newTask)
        .then(response => res.status(201).json({ message: "task successfully created" }))
        .catch(error => res.status(500).json({ errorMessage: "could not create task at this time" }))
    }
})


// retrieve a list of tasks (the list of tasks should include the project name and project description)
router.get('/', (req, res) => {
    Tasks.get()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json({ errorMessage: "could not retrieve tasks at this time" }))
})

module.exports = router;