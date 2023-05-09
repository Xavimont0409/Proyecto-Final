const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Tax_Condition', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.ENUM('Exempted', 'registered agent', 'end consumer', 'single taxpayer'),
            allowNull: false
        },
    },
    { 
        timestamps: false
    })
}