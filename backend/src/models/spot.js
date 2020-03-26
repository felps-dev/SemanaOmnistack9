'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    thumbnail: DataTypes.STRING,
    company: DataTypes.STRING,
    price: DataTypes.FLOAT,
    techs: DataTypes.JSON,
    userId: DataTypes.INTEGER,
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};
