
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        // primary key
        tbl.increments();
        // name, required
        tbl.text('name', 255)
            .notNullable();
        // description, optional
        tbl.text('description');
        // completed, boolean; cannot be NULL, should default to false
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        // primary key
        tbl.increments();
        // name, required, unique
        tbl.text('name', 255)
            .unique()
            .notNullable();
        // description, optional
        tbl.text('description')
    })
    .createTable('tasks', tbl => {
        // primary key
        tbl.increments();
        // description, required
        tbl.text('description')
            .notNullable();
        // notes, optional
        tbl.text('notes');
        // completed, boolean; cannot be NULL, should default to false
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
        // foreign key: project_id, referencing id in projects table, required
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('projects_resources', tbl => {
        // primary key
        tbl.increments();
        // foreign key: project_id, required
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        // foreign key: resource_id, required
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
