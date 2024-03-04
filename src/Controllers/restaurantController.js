require('express');
const restaurant = require('../Models/restaurant');

async function createRestaurant(req, res) {
    try {
        await restaurant.create({
            restaurantName: req.body.restaurantName,
            restaurantNit: req.body.restaurantNit,
            restaurantAddress: req.body.restaurantAddress,
            restaurantPhone: req.body.restaurantPhones,
            restaurantID: req.body.restaurantId,
            cityID: req.body.cityID
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(console => {
            return res.status(400).json({
                error: error
            });
        })
    } catch (e) {
        console.log(e);
    }

    async function updateRestaurant(req, res) {
        try {
            await restaurant.update({
                restaurantName: req.body.restaurantName,
                restaurantAddress: req.body.restaurantAddress,
                restaurantPhone: req.body.restaurantPhones,
            }).then(function (data) {
                return res.status(200).json({
                    data: data
                });
            }).catch(console => {
                return res.status(400).json({
                    error: error
                });
            })
        } catch (e) {
            console.log(e);
        }

        async function disableRestaurant(req, res) {
            try {
                await restaurant.destroy({
                    where: {restaurantId: req.params.restaurantID},
                }).then(function (data) {
                    return res.status(200).json({
                        data: data
                    });
                }).catch(console => {
                    return res.status(400).json({
                        error: error
                    });
                })
            } catch (e) {
                console.log(e);
            }

    async function listRestaurant(req, res) {
        try {
            await restaurant.findAll({
                attributes: [
                    'restaurantName',
                    'restaurantNit',
                    'restaurantAdress',
                    'restaurantPhone',
                    'cityId'
                ],
                order: ['restaurantName']

            }).then(function (data) {
                return res.status(200).json({
                    data: data
                });
            }).catch(error => {
                return res.status(400).json({
                    error: error
                });
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    module.exports = {
        createRestaurant,
        listRestaurants,
        updateRestaurants,
        disableRestaurant,
            }
        }
    }
}