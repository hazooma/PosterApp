exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('printers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('printers').insert([
        {
          name: 'Berlin Prin',
          country_id: 1,
          phone: '111-222-3333',
          email: 'zooma@dogpound.com',
        },
        {
          name: 'Bella Italia',
          country_id: 2,
          phone: '111-222-3333',
          email: 'hazem@dogpound.com',
        },
      ]);
    });
};
