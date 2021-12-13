'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: 'userId',
        as: 'posts',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.postLikes, {
        foreignKey: 'userId',
        as: 'postLikes',
        onDelete: 'CASCADE',
      });
    }
  };
  user.init({
    profileImg: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    token: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};