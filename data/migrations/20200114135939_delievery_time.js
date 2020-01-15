exports.up = function(knex) {
  return knex.schema.createTable('delievery_times', function(t) {
    // represents time between two contries
    t.increments('id')
      .unsigned()
      .primary();
    t.integer('source')
      .unsigned()
      .notNullable();
    t.foreign('source')
      .references('id')
      .inTable('countries');

    t.integer('destination')
      .unsigned()
      .notNullable();
    t.foreign('destination')
      .references('id')
      .inTable('countries');

    t.integer('period').notNull();
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
