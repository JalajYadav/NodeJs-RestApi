const Sequelize = require('sequelize');
const sequelize = require('../util/database.js');

const User = sequelize.define("user",{
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    profile_img: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false,      
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender:{
        type:Sequelize.ENUM('male', 'female'),
        allowNull: false,
    },
    token: {
        type:Sequelize.STRING,
        allowNull: true,
    },
    created_at: {
        type:Sequelize.DATE(6),
        allowNull:false
    },
    updated_at:{
        type: Sequelize.DATE(6),
        allowNull:false,
    },
    is_deleted:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
    },
})

module.exports = User;
