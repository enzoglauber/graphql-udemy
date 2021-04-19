
const knex = require('../config/db');

// knex('profiles')
//   .then(response => response.map(p => p.name))
//   .then(names => console.log(names))
//   .catch(err => console.log(err))
//   .finally(() => knex.destroy());


// knex('profiles').select('name', 'id')
//   .then(response => console.log(response))
//   .catch(err => console.log(err))
//   .finally(() => knex.destroy());


// knex.select('name', 'id')
//   .from('profiles')
//   .then(response => console.log(response))
//   .catch(err => console.log(err))
//   .finally(() => knex.destroy());

// // pagination
// knex.select('name', 'id')
//   .from('profiles')
//   .limit(4).offset(2)
//   .then(response => console.log(response))
//   .catch(err => console.log(err))
//   .finally(() => knex.destroy());

knex('profiles').select('name', 'id')
  // .where({ id: 2 })
  // .where('id', '=', 2)
  // .where('name', 'like', '%m%')
  // .whereNot({ id: 2 })
  .whereIn('id', [1, 2, 3])
  // .first()
  .then(response => console.log(response))
  .catch(err => console.log(err))
  .finally(() => knex.destroy());

