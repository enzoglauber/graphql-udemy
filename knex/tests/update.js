const knex = require('../config/db');

const newUser = {
  name: 'Pedro',
  email: 'p@gmail.com',
  password: '123456',
}

async function exercicio() {
  const { count } = await knex('users')
    .count('* as count')
    .first()

  if (count === 0) {
    await knex('users').insert(newUser);
  }

  let { id } = await knex('users').select('id').limit(1).first();

  // alterar
  await knex('users').where({ id })
    .update({ name: 'Pedro Garcia', email: 'pedro.garcia@gmail.com' })

  return knex('users').where({ id });
}

exercicio()
  .then(user => console.log(user))
  .finally(() => knex.destroy());
