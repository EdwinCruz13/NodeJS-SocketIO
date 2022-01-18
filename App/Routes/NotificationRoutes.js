const express = require('express');
const Router = express.Router();
const { ListNotification, GetNotification } = require('../Controllers/NotificationController')

//define routes using the controllers
Router.get("/GetNotification", GetNotification);
Router.get("/ListNotification", ListNotification);



//export routers
module.exports = Router;