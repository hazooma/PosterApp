exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product_printers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('product_printers').insert([
        // first printer can print both poster and forex
        // printer 2 can only print forex
        { product_id: 1, printer_id: 1 },
        { product_id: 2, printer_id: 1 },
        { product_id: 1, printer_id: 2 },
      ]);
    });
};
