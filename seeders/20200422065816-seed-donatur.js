'use strict';
let fs = require('fs')
let data = JSON.parse(fs.readFileSync('./json/donatur.json','utf8'))
module.exports = {
  up: (queryInterface, Sequelize) => {
    data.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert('Donaturs', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Donaturs', null, {});
  }
};
