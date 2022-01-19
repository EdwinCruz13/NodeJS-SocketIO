//imports 
const {request, response} = require('express');
const NotificationModel = require('../Models/NotificationModel');

/**
 * Summary: Create notification controller class
 */
class NotificacionController
{
    
    /**
     * Summarize: List of notification
     * @param {request from url} req 
     * @param {response to url} res 
     */
    async ListNotification(req, res)
    {
        //get list
        const list = await NotificationModel.GetAll();
        res.send(list);
    }

    /**
     * Summarize: get a specific notificacion
     * @param {request from url} req 
     * @param {response to url} res 
     */
    GetNotification(req, res)
    {
        res.send("here");
    }

}

//exports class controller as object
module.exports = new NotificacionController() ;

