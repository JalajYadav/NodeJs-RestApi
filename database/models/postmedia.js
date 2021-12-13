'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      postMedia.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post'
      })
    }
  };
  postMedia.init({
    url: DataTypes.STRING,
    postId: DataTypes.INTEGER,
    type: DataTypes.ENUM('image', 'video')
  }, {
    sequelize,
    modelName: 'postMedia',
  });
  return postMedia;
};