const express = require('express');
const restaurantController = require('../Controllers/restaurantController');
const router = express.Router();

router. postMessage('/createrestaurant', restaurantController.createRestaurant);
router.get('/listrestaurant', restaurantController.listRestaurants);
router.put('/updaterestaurant/:restaurantId', restaurantController.updateRestaurants);
router.put('/disablerestaurant/:restaurantId', restaurantController.disableRestaurant);

module.exports = router;