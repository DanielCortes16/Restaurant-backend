const { Sequelize } = require('sequelize');
var database = 'restaurantBD';
var username = 'postgres';
var password = '123456789';

const connection = new Sequelize(database, username, password,{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;