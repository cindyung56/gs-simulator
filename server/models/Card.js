const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Card extends Model {}

Card.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    idol: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    attribute: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    unawakened: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    awakened: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    limited: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "card",
  }
);

module.exports = Card;
