const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api", (req, res) => {
    res.status(200).json({ message: "api is ready to go"})
});

module.exports = server;