const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Star", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stars:{
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
