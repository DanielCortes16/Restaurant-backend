const express = require('express');
const deparmentcontroller = require('../Controllers/departmentcontroller');
const router = express.Router();

router.get('/listdepartments', deparmentController.listDepartments);

module.exports = router;