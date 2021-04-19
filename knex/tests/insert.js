const knex = require('../config/db');

// const newProfile = {
//   name: 'visitante',
//   label: 'Visitante',
// }

// knex('profiles').insert(newProfile)
//   .then(response => console.log(response))
//   .catch(err => console.log(err))
//   .finally(() => knex.destroy());


const SUProfile = {
  name: 'root' + Math.random(),
  label: 'Super user',
}

knex.insert(SUProfile).into('profiles')
  .then(response => response[0])
  .then(id => `O código gerado foi: ${id}`)
  .then(string => console.log(string))
  .catch(err => console.log(err))
  .finally(() => knex.destroy());
