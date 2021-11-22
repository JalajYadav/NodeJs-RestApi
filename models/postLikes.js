const Sequelize = require('sequelize');
const sequelize = require("../util/database.js");

const postLikes = sequelize.define("postLikes",{
    like_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    post_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    user_id:{
        type:Sequelize.INTEGER,
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
});