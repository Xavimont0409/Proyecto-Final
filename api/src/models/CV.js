const { DataTypes } = require('sequelize');

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
          phone: {
            type: DataTypes.INTEGER,
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
          linkedin: {
            type: DataTypes.STRING,
            allowNull: true
          },
          personal_description: {
            type: DataTypes.STRING,
            allowNull: false
          },
          skill: {
            type: DataTypes.STRING,
            allowNull: false
          },
          country: {
            type: DataTypes.STRING,
            allowNull: false
          },
          educational_institution:{
            type: DataTypes.STRING,
            allowNull: false
          },
          state:{
            type: DataTypes.STRING,
            allowNull: false
          },
          initial_date : {
            type: DataTypes.STRING,
            allowNull: false
          },
          finish_date: {
            type: DataTypes.STRING,
            allowNull: true
          }
    });
};