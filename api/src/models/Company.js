const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Company', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cuit: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        registed:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        profile:{
            type:DataTypes.STRING,
            defaultValue: "Company"
        },
        photo:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.STRING,
        },
        webPage:{
            type: DataTypes.STRING,
        },
        job_area:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    })
}