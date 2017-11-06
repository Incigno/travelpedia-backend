var express = require('express');
var router = express.Router();
var controllers = require('../controllers/mediaController');
var jwthelpers = require('../helpers/jwtHelpers');

router.post('/', jwthelpers.login, controllers.createMedia); //login first 
router.get('/', jwthelpers.login, controllers.getAllMedia); //login first 
router.get('/:id', jwthelpers.login, controllers.getOneMedia); //login first
router.put('/:id', jwthelpers.login, controllers.editMedia); //login first

module.exports = router;
