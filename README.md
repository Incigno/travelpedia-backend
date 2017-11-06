# Travelpedia Backend

Authors: Haryana Wisnu Wardhana, Didit Suryadi

### Definition

RESTFUL API Backend.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd travelpedia-backend
$ npm install
$ sequelize db:migrate
$ sequelize db:seed:all
$ npm start
```
### Access

| Route | HTTP |Description|
| ------ | ------ |------ |
|/signup       |   POST   |      sign up with new user info|
|/signin       |   POST   |      sign in while get an access token based on credentials|
|/timeline       |   GET   |      get timeline|
|/timeline/name/:key       |   GET   |      get timeline by name|
| ------ | ------ |------ |
|/users       |   GET   |      get all the users (use tokens)|
|/user/id/:key       |   GET   |      get the user by id (use tokens)|
|/user/username/:key     |   GET   |      get the user by username (use tokens)|
|/user/email/:key     |   GET   |     get the user by email (use tokens)|
|/user/:id     |   PUT   |      edit user (use tokens)|
| ------ | ------ |------ |
|/location       |   GET   |      get all the location (use tokens)|
|/location/:id       |   GET   |      get the location by id (use tokens)|
|/location/   |   POST   |      create location (use tokens)|
|/location/:id     |   PUT   |      edit location (use tokens)|
| ------ | ------ |------ |
|/media       |   GET   |      get all the media (use tokens)|
|/media/:id       |   GET   |      get the media by id (use tokens)|
|/media/   |   POST   |      create media (use tokens)|
|/media/:id     |   PUT   |      edit media (use tokens)|
| ------ | ------ |------ |
|/facility       |   GET   |      get all the facility (use tokens)|
|/facility/:id       |   GET   |      get the facility by id (use tokens)|
|/facility/   |   POST   |      create facility (use tokens)|
|/facility/:id     |   PUT   |      edit facility (use tokens)|
| ------ | ------ |------ |
