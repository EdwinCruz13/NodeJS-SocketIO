const express = require('express');
const Router = express.Router();
const { GetUser, ListUser } = require('../Controllers/UsersController')

//define routes from user
Router.get("/GetUser", GetUser);
Router.get("/ListUser", ListUser);



//export routers
module.exports = Router;