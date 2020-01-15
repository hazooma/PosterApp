exports.up = function(knex) {
  return knex.schema.createTable('orders', function(t) {
    // the actual order
    t.increments('id')
      .unsigned()
      .primary();
    t.dateTime('toBeDelivered_At').notNull();
    // printer used to print this order
    t.integer('printer_id')
      .unsigned()
      .notNullable();
    t.foreign('printer_id')
      .references('id')
      .inTable('printers');

    // product
    t.integer('product_id')
      .unsigned()
      .notNullable();
    t.foreign('product_id')
      .references('id')
      .inTable('products');

    // destination
    t.integer('country_id')
      .unsigned()
      .notNullable();
    t.foreign('country_id')
      .references('id')
      .inTable('countries');
    t.string('name').notNull();

    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
