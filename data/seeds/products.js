exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: 'poster',
          price: 2.5,
        },
        {
          name: 'forex',
          price: 6.5,
        },
      ]);
    });
};
