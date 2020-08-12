const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db('schemes')
    .then(schemes => schemes);
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .then(schemes => {
      console.log(schemes);
      if (schemes.length > 0) {
        return schemes[0];
      } else {
        return null;
      }
    })
    .catch(err => console.log(err));
}

function findSteps(id) {
  return db('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .select(['steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions'])
    .where({ scheme_id: id })
    .then(steps => steps)
    .catch(err => console.log(err));
}

function add() {

}

function update() {

}

function remove() {

}