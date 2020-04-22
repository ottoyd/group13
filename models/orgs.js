'use strict';
module.exports = (sequelize, DataTypes) => {
  let {Model} = sequelize.Sequelize
  class Orgs extends Model {}
  Orgs.init({
    nama_yayasan: DataTypes.STRING,
    target: DataTypes.INTEGER,
    kepala_yayasan: DataTypes.STRING,
    jumlah_terkumpul: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Orgs"
  });

  Orgs.associate = function(models) {
    // associations can be defined here
    Orgs.belongsToMany(models.Donatur, { through : 'DonaturOrgs'});
  };
  return Orgs;
};