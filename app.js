//etc etc etc

//Imports
//execute global variable
require('dotenv').config(); 
//require express server
const Express = require('express'); 
//require socket.io
const SocketIO = require('socket.io');  
//require cors as middleware
const Cors = require('cors'); 



/**
 * Summarize: Class that execute the app
 */
class ApplicationMain
{
    //Properties
    Port
    Server 

    /**
     * constructor that charge every configuration
       and variables
    */
    constructor()
    {
        //Load Configuration
        this.LoadConfiguration();

        //load middlewaere
        this.LoadMiddleware();

        //Load the routes
        this.LoadRoutes();
    }

    /**
     * Initialize the webserver
     */
    Initialize()
    {

        //execute server as WebServer
        const WebServer = this.Server.listen(this.Port, () => {
            console.log(`Server executed on port ${this.Port}`);
        });

        //Execute websocket
        //const io = SocketIO(WebServer); 

        //open websocket
        SocketIO(WebServer).on('connection', (socket) => {
            console.log(`New connection using socketIO with ID ${socket.id} :) `);
        });
    }


    /**
     * Load some configuration as routes, views,
       public files and public folders
     */
    LoadConfiguration()
    {
        this.Port = process.env.PORT || 3000;
        this.Server = Express();
    }

    /**
     * Load Primary Middleware that allow execute
       some enviroments
     */
    LoadMiddleware()
    {
        //Define middleware
        this.Server.use(Cors());
        this.Server.use(Express.json());
    }

    /**
     * Load routes that existed througt the project
     */
    LoadRoutes()
    {
        //Define routes
        this.Server.use("/", require('./App/Routes/main.js'));
    }
}

//execute the application
const app = new ApplicationMain();
app.Initialize();









