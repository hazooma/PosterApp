exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('delievery_times')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('delievery_times').insert([
        {
          source: '1',
          destination: '3',
          period: 2,
        },
        {
          source: '1',
          destination: '4',
          period: 3,
        },
        {
          source: '1',
          destination: '1',
          period: 1,
        },
        {
          source: '2',
          destination: '2',
          period: 1,
        },
        {
          source: '2',
          destination: '4',
          period: 2,
        },
        {
          source: '2',
          destination: '3',
          period: 2,
        },
      ]);
    });
};
