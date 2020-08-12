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
    .then(schemes => schemes)
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
    });
}

function findSteps() {

}

function add() {

}

function update() {

}

function remove() {

}