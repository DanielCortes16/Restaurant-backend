const { Sequelize } = require('sequelize');('sequelize');

var database = 'restaurantBD';
var username = 'nombre de postman';
var password = '123456789';

const connection = new Sequelize(database, username, password,{
    host: 'localhost',
    dialect: 'nombre de postman'
});

module.exports = connection;