'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      postLike.belongsTo(models.post, {
        foreignKey: 'postId',
        as: 'post',
      });
      postLike.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user',
      })
    }
  };
  postLike.init({
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'postLike',
  });
  return postLike;
};