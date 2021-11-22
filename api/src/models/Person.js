const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   
    sequelize.define('person', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.name} ${this.lastName}`;
        }
      },
      birth: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      timestamps: false,
    });
  };
  