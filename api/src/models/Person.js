const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   
    sequelize.define('person', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    }, {
      timestamps: false,
    });
  };
  