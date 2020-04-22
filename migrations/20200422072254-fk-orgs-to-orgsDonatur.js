'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('DonaturOrgs', ['OrgsId'], {
        type: 'foreign key',
        name: 'custom_fkey_OrgsId',
        references: { //Required field
          table: 'Orgs',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("DonaturOrgs","custom_fkey_OrgsId");
  }
};
