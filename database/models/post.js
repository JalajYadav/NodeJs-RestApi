'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.hasMany(models.postLike, {
        foreignKey: 'postId',
        as: 'postLikes',
        onDelete: 'CASCADE',
      });
      post.hasMany(models.postMedia, {
        foreignKey: 'postId',
        as: 'postMedias',
        onDelete: 'CASCADE',
      })
    }
  };
  post.init({
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};