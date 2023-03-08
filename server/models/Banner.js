const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Banner extends Model {}

Banner.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    bannerArt: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "banner",
  }
);

module.exports = Banner;
