'use strict';
module.exports = (sequelize, DataTypes) => {
  let {Model} = sequelize.Sequelize
  class DonaturOrg extends Model {}
  DonaturOrg.init({
    OrgsId: DataTypes.INTEGER,
    DonaturId: DataTypes.INTEGER,
    jumlah_donasi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "DonaturOrg"
  });

  DonaturOrg.associate = function(models) {
    // associations can be defined here
    DonaturOrg.belongsTo(models.Orgs, { foreignKey: "OrgsId", targetKey: "id" });
    DonaturOrg.belongsTo(models.Donatur, { foreignKey: "DonaturId", targetKey: "id" });
  };
  return DonaturOrg;
};