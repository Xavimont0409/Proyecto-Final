const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Cv', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          dni: {
            type: DataTypes.STRING,
            allowNull: false
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: false
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false
          },
          photo: {
            type: DataTypes.STRING,
            allowNull: true
          },
          profession: {
            type: DataTypes.STRING,
            allowNull: false
          },
          github: {
            type: DataTypes.STRING,
            allowNull: true
          },
          linkedin: {
            type: DataTypes.STRING,
            allowNull: true
          },
          work_experience: {
            type: DataTypes.STRING,
            allowNull: false
          },
          personal_description: {
            type: DataTypes.STRING,
            allowNull: false
          },
          education: {
            type: DataTypes.STRING,
            allowNull: false
          }
    });
};