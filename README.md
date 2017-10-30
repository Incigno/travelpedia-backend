# Travelpedia Backend

Authors: Haryana Wisnu Wardhana, Didit Suryadi

### Definition

RESTFUL API Backend.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd travelpedia-server
$ npm install
$ npm start
```
### Access

router.post('/signup', controllers.signup);
router.post('/signin', passport.authenticate('local', {
  session: false
}), function(req, res) {
  var user = req.user;
  res.json(user);
});
router.get('/users', jwthelpers.login, controllers.getAll); //login first
router.get('/user/id/:key', jwthelpers.login, controllers.getbyId); //login first
router.get('/user/username/:key', jwthelpers.login, controllers.getbyUsername); //login first
router.get('/user/email/:key', jwthelpers.login, controllers.getbyEmail); //login first
router.put('/user/:id', jwthelpers.login, controllers.editUser); //login first

| Route | HTTP |Description|
| ------ | ------ |------ |
|/signup       |   POST   |      sign up with new user info|
|/signin       |   POST   |      sign in while get an access token based on credentials|
|/users       |   GET   |      get all the users (use tokens)|
|/user/id/:key       |   GET   |      get the user by id (use tokens)|
|/user/username/:key     |   GET   |      get the user by username (use tokens)|
|/user/email/:key     |   GET   |     get the user by email (use tokens)|
|/user/:id     |   PUT   |      edit user (use tokens)|
