const NotificacionModel = require('../Models/NotificacionModel');
//create controllers

//Get a User
const GetNotificacion = ((req, res) => {
    res.send("here");
});

//Get the list of user
const ListNotificacion = async (req, res) => {
    //get list
    const list = await NotificacionModel.GetAll();
    res.send(list);
};

module.exports = {GetNotificacion, ListNotificacion}

