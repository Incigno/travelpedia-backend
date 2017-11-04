'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    locationName: DataTypes.STRING,
    description: DataTypes.STRING,
    additionalInfo: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  });
  
  Location.associate = function (models) {
    Location.belongsTo(models.User, {
      foreignKey: "UserId"
    });
    Location.hasMany(models.Media);
    Location.hasMany(models.Facilty);
  };
  return Location;
};