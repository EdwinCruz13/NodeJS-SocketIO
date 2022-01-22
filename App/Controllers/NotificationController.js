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
        res.render('./Notification/List');
    }

    /**
     * get the list of notification of the year
     * execute a stored procedure and get the amount of year
     * @param {*} req 
     * @param {*} res 
     */
    async ListNotificationGet(req, res)
    {
        const list = await NotificationModel.GetAll();

        //run through the result from list and become into array
        const result = [];
        for (let index = 0; index < list.length; ++index) {
            const element = list[index];
            result.push(element.amount);
        }

        //declare a object
        const jsonString = {
            name: list[0].year,
            data: result
        }

        res.json(jsonString);
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

