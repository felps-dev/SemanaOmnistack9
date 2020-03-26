'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    data: DataTypes.STRING,
    approved: DataTypes.BOOLEAN,
    userid: DataTypes.INTEGER,
    spotid: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};