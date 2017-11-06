'use strict';
module.exports = (sequelize, DataTypes) => {
  var Facilty = sequelize.define('Facilty', {
    facilityName: DataTypes.STRING,
    iconName: DataTypes.STRING,
    rating: DataTypes.FLOAT
  });
  Facilty.associate = function (models) {
    Facilty.belongsTo(models.Location, {
      foreignKey: "LocationId"
    })
  };
  return Facilty;
};