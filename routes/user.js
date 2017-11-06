var express = require('express');
var router = express.Router();
var controllers = require('../controllers/userController');
var jwthelpers = require('../helpers/jwtHelpers');
var passport = require('passport');

router.post('/signup', controllers.signup);
router.post('/signin', passport.authenticate('local', {
  session: false
}), function(req, res) {
  var user = req.user;
  res.json(user);
});
router.get('/timeline', controllers.getTimeline); //login first
router.get('/users', jwthelpers.login, controllers.getAll); //login first
router.get('/user/id/:key', jwthelpers.login, controllers.getbyId); //login first
router.get('/user/username/:key', jwthelpers.login, controllers.getbyUsername); //login first
router.get('/user/email/:key', jwthelpers.login, controllers.getbyEmail); //login first
router.put('/user/:id', jwthelpers.login, controllers.editUser); //login first

module.exports = router;
