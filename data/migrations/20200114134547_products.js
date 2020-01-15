exports.up = function(knex) {
  return knex.schema.createTable('products', function(t) {
    // Our Products: poster or forex
    t.increments('id')
      .unsigned()
      .primary();
    t.string('name').notNull();
    t.decimal('price', 6, 2).notNull();

    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
