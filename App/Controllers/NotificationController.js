//imports 
const {request, response} = require('express');
const NotificationModel = require('../Models/NotificationModel');


//create controllers
class NotificacionController
{
    
    //List of notification
    async ListNotification(req, res)
    {
        //get list
        const list = await NotificationModel.GetAll();
        res.send(list);
    }

    //get a specific notificacion
    GetNotification(req, res)
    {
        res.send("here");
    }

}

//exports class controller as object
module.exports = new NotificacionController() ;

