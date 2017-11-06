'use strict';
module.exports = (sequelize, DataTypes) => {
  var Media = sequelize.define('Media', {
    mediaName: DataTypes.STRING,
    typeMedia: DataTypes.STRING,
    sizeMedia: DataTypes.INTEGER,
    pathMedia: DataTypes.STRING,
    urlMedia: DataTypes.STRING
  });
  Media.associate = function (models) {
    Media.belongsTo(models.Location, {
      foreignKey: "LocationId"
    })
 };
  return Media;
};