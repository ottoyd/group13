'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('DonaturOrgs', ['DonaturId'], {
      type: 'foreign key',
      name: 'custom_fkey_DonaturId',
      references: { //Required field
        table: 'Donaturs',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  });
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("DonaturOrgs","custom_fkey_DonaturId");
  }
};
