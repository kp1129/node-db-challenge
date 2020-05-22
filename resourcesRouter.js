const express = require('express');
const Resources = require('./resourcesModel');
const router = express.Router();

// API endpoints to 
// add resources
router.post("/", (req, res) => {
    const newResource = req.body;
    if(!newResource.name){
        res.status(400).json({ errorMessage: "please provide resource name"})
    } else {
        Resources.add(newResource)
        .then(response => res.status(201).json({ message: "resource successfully created" }))
        .catch(error => res.status(500).json({ errorMessage: "could not create resource at this time" }))
    }
})


// retrieve resources
router.get("/", (req, res) => {
    Resources.get()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json({ errorMessage: "could not retrieve resources at this time" }))
})


module.exports = router;