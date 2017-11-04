var express = require('express');
var router = express.Router();
var controllers = require('../controllers/locationController');
var jwthelpers = require('../helpers/jwtHelpers');

router.post('/', jwthelpers.login, controllers.createLocation); //login first 
router.get('/', jwthelpers.login, controllers.getAllLocation); //login first 
router.get('/:id', jwthelpers.login, controllers.getOneLocation); //login first
router.put('/:id', jwthelpers.login, controllers.editLocation); //login first

module.exports = router;
