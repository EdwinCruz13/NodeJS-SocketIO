const express = require('express');
const Router = express.Router();
const { ListNotification, GetNotification } = require('../Controllers/NotificationController')

//define routes from user
Router.get("/GetNotification", GetNotification);
Router.get("/ListNotification", ListNotification);



//export routers
module.exports = Router;