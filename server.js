const express = require('express');
const helmet = require('helmet');

const tasksRouter = require('./tasksRouter');
const projectsRouter = require('./projectsRouter');
const resourcesRouter = require('./resourcesRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/tasks", tasksRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);

server.get("/api", (req, res) => {
    res.status(200).json({ message: "api is ready to go"})
});



module.exports = server;