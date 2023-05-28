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
            type: DataTypes.STRING,
<<<<<<< HEAD
            allowNull: false,
        },
        end_date: {
            type: DataTypes.STRING,

=======
            
        },
        end_date: {
            type: DataTypes.STRING,
>>>>>>> 2ae2a0e729920d7bfe41619f846301e449106501
        },
    },
    { 
        timestamps: false
    })
}