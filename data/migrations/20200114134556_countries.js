exports.up = function(knex) {
  return knex.schema.createTable('countries', function(t) {
    // the countries the system have
    t.increments('id')
      .unsigned()
      .primary();
    t.string('name').notNull();
    t.unique('name');

    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('countries');
};
