const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Experience', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        charge: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        experience_level: {
            type: DataTypes.STRING,

        },
        location: {
            type: DataTypes.STRING,
        },
        start_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.STRING,
            allowNull: true

        },
        still_working: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    { 
        timestamps: false
    })
}