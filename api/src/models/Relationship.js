const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   
    sequelize.define('relationship', {
      nameRelationship: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      timestamps: false,
    });
  };