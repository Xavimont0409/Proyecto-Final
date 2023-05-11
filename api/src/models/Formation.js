const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Formation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        study_level: {
            type: DataTypes.STRING,
            allowNull: false
        },
        study_area: {
            type: DataTypes.STRING,
            allowNull: false
        },
        institute: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATEONLY,

        },
    },
    { 
        timestamps: false
    })
}