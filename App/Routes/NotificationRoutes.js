const express = require('express');
const Router = express.Router();
const { ListNotification, GetNotification, ListNotificationGet} = require('../Controllers/NotificationController')

//define routes using the controllers
Router.get("/GetNotification", GetNotification);
Router.get("/ListNotification", ListNotification);


Router.get("/ListNotificationGet", ListNotificationGet);



//export routers
module.exports = Router;