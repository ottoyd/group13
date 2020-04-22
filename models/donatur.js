'use strict';
module.exports = (sequelize, DataTypes) => {
  let {Model} = sequelize.Sequelize
  class Donatur extends Model {}
  Donatur.init({
    nama_donatur: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    saldo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Donatur"
  });
  Donatur.associate = function(models) {
    // associations can be defined here
    Donatur.belongsToMany(models.Orgs, { through : 'DonaturOrgs'});
  };
  return Donatur;
};