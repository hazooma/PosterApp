exports.up = function(knex) {
  return knex.schema.createTable('printers', function(t) {
    // the printers
    t.increments('id')
      .unsigned()
      .primary();
    t.string('name').notNull();
    t.string('phone').notNull();
    t.string('email').notNull();
    t.integer('country_id')
      .unsigned()
      .notNullable();
    t.foreign('country_id')
      .references('id')
      .inTable('countries');
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('printers');
};
