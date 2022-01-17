const UserModel = require('../Models/UsersModel');
//create controllers

//Get a User
const GetUser = ((req, res) => {
    res.send("here");
});

//Get the list of user
const ListUser = async (req, res) => {
    //get list
    const list = await UserModel.GetAll();
    res.send(list);
};

module.exports = {GetUser, ListUser}

