const {model, DataType, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class restaurant extends Model {};

restaurant.init({
    restaurantId: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    restaurantNamed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantNit: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    restaurantAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantPhone: {
        type:DataTypes.STRING,
        allowNull: false
    },
    cityID:{
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: 'restaurant',
    paranoid: true,
    deleteAt: 'destroyTime'
});

module.export = restaurant;