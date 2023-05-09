const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('WorkMethod', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.ENUM('face-to-face', 'hybrid', 'remote'),
            allowNull: false
        },
    },
    { 
        timestamps: false
    })
}