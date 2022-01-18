//Imports
require('dotenv').config(); //execute global variable
const Express = require('express'); //require express server
const Cors = require('cors');

//Class of Application
class ApplicationMain
{
    //Properties
    Port
    Server 

    //constructor that charge every configuration
    //and variables
    constructor()
    {
        //Load Configuration
        this.LoadConfiguration();

        //load middlewaere
        this.LoadMiddleware();

        //Load the routes
        this.LoadRoutes();
    }

    //Initialize the webserve
    Initialize()
    {
        //execute server
        this.Server.listen(this.Port, () => {
            console.log(`Server executed on port ${this.Port}`);
        })
    }


    //Load some configuration as routes, views,
    //public files and public folders
    LoadConfiguration()
    {
        this.Port = process.env.PORT || 3000;
        this.Server = Express();
    }

    //Load Primary Middleware that allow execute
    //some enviroments
    LoadMiddleware()
    {
        //Define middleware
        this.Server.use(Cors());
        this.Server.use(Express.json());
    }

    //Load routes that existed througt the project
    LoadRoutes()
    {
        //Define routes
        this.Server.use("/", require('./App/Routes/main.js'));
    }
}

const app = new ApplicationMain();
app.Initialize();









