const express = require('express');
const Router = express.Router();
const { GetNotificacion, ListNotificacion } = require('../Controllers/NotificacionController')

//define routes from user
Router.get("/GetNotificacion", GetNotificacion);
Router.get("/ListNotificacion", ListNotificacion);



//export routers
module.exports = Router;