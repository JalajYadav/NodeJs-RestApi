const Sequelize = require('sequelize');

const sequelize = new Sequelize("Demo","admin","admin",{
    dialect: "mysql",
    host: "localhost",
});

module.exports =sequelize;