const Sequelize = require('sequelize');
const sequelize = require('../util/database.js');

const Post = sequelize.define("post", {
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    created_at:{
        type:Sequelize.DATE(6),
        allowNull:false,
    },
    updated_at:{
        type:Sequelize.DATE(6),
        allowNull:false,
    },
    is_deleted:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
    },
})

module.exports = Post;
