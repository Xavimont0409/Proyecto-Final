const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Seniority', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.ENUM('senior', 'semi_senior', 'junior', 'trainee'),
            allowNull: false
        },
    },
    { 
        timestamps: false
    })
}