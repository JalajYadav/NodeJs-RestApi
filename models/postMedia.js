const Sequelize = require('sequelize');
const sequelize = require('../util/database.js');

const Media = sequelize.define("media", {
    media_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    url:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    post_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    type:{
        type:Sequelize.ENUM('image', 'video'),
        allowNull:false,
    },
    created_at:{
        type:Sequelize.DATE(6),
        allowNull:false,
    },
    inserted_at:{
        type:Sequelize.DATE(6),
        allowNull:false,
    }
})