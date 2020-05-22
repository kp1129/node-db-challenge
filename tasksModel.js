const db = require('./connection');

module.exports = {
    add,
    get
}

function add(task) {
    return db('tasks').insert(task)
}

function get() {
    return db('tasks')
            .join('projects', 'tasks.project_id', 'projects.id')
            .select('projects.name as project name', 'projects.description as project description', 'tasks.description as task description', 'tasks.notes as task notes', 'tasks.completed as task completed')
}