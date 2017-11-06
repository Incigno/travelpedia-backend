var express = require('express');
var router = express.Router();
var controllers = require('../controllers/facilityController');
var jwthelpers = require('../helpers/jwtHelpers');

router.post('/', jwthelpers.login, controllers.createFacilty); //login first 
router.get('/', jwthelpers.login, controllers.getAllFacilty); //login first 
router.get('/:id', jwthelpers.login, controllers.getOneFacilty); //login first
router.put('/:id', jwthelpers.login, controllers.editFacility); //login first

module.exports = router;
