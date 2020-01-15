exports.up = function(knex) {
  return knex.schema.createTable('product_printers', function(t) {
    // represents what products can each printer print !
    t.increments('id')
      .unsigned()
      .primary();
    t.integer('product_id')
      .unsigned()
      .notNullable();
    t.integer('printer_id')
      .unsigned()
      .notNullable();
    t.foreign('product_id')
      .references('id')
      .inTable('products');
    t.foreign('printer_id')
      .references('id')
      .inTable('printers');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
