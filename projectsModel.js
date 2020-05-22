const db = require('./connection');

module.exports = {
    add,
    get
}

function add(project) {
    return db('projects').insert(project)
}

function get() {
    return db('projects')
}