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
    backgroundImages: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      get(){
        return this.getDataValue('backgroundImages').split(';')
      },
      set(val){
        this.setDataValue('backgroundImages', val.join(";"))
      }
    },
    // cardPool: {
    //   type: DataTypes.ARRAY,
    //   allowNull: false,
    //   unique: false
    // },
    // featured: {
    //   type: DataTypes.ARRAY,
    //   allowNull: false,
    //   unique: false
    // },
    sparkCounter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    }
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
