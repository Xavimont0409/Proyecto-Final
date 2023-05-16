const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("State", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    registed:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    name:{
      type: DataTypes.ENUM('Company', 'Applicant'),
      allowNull: false,
    }
  });
};
