//etc etc etc

//Imports
//execute global variable
require('dotenv').config(); 
//require path
const path = require('path');
//require express server
const Express = require('express'); 
//require socket.io
const SocketIO = require('socket.io');  
//require cors as middleware
const Cors = require('cors'); 
//require the engine templating handlebars
const exphbs = require('express-handlebars');

const moment = require('moment');


const ModelData = require('./App/Models/NotificationModel');
const LoanModel = require('./App/Models/LoanModel');
let year = 0;



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

        //load engine
        this.LoadEngine();

        //Load the routes
        this.LoadRoutes();

    }


    

    /**
     * Initialize the webserver
     */
    async Initialize()
    {
        let result = [];
        let resultBefore = [];
        
        
        //define public folder
        const folder = path.join(__dirname, 'App', 'views', 'Public');
        this.Server.use('/public', Express.static(folder));

        //execute server as WebServer
        const WebServer = this.Server.listen(this.Port, () => {
            console.log(`Server executed on port ${this.Port}`);
        });
        
        //open websocket
        SocketIO(WebServer).on('connection',  (socket) => {
            console.log(`New connection with socketIO with ID ${socket.id} :) `);

            socket.on('reload:client', function(data){
                setInterval(async () =>  {

                    
                    let date = moment(Date.now()).format('DD/MM/YYYY HH:mm:ss');
                    result = await loadLoan();
                   

                   
                    


                    //emitir resultados
                    socket.volatile.emit('reload:server', result, year);
                    console.log(`Socket event loaded at ${date}`);



                    async function loadLoan(){
                        const list = await LoanModel.GetAmount();

                        //run through the result from list and become into array
                        const result = [];
                        for (let index = 0; index < list.length; ++index) {
                            year = 2022;
                            const element = list[index];
                            result.push({name: list[index].TipoPrestamo, y: list[index].Desembolsado});
                        }
                        return result;
                    }

                    //internal function that load all the data
                    async function loaddata(){
                        const list =  await ModelData.GetAll();
                        let result = [];

                        for (let index = 0; index < list.length; ++index) 
                        {
                            const element = list[index];
                            result.push(element.amount);
                            year = element.year;
                        }

                        return result;
                    }


                }, 1000)

                
            });

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
     * load the engine templating handlebars
     */
    LoadEngine()
    {
        //create a globar variable to handle the engine
        this.Server.set('views', path.join(__dirname, 'App', 'views'));
        //define a engine templating
        this.Server.engine('.handlebars', exphbs.engine({
            defaultLayout: 'main',
            layoutsDir: path.join(this.Server.get('views'), 'Layouts'),
            partialsDir: path.join(this.Server.get('views'), 'Notification'),
            extname: '.handlebars',
        }));

        //set the engine
        this.Server.set('view engine', '.handlebars');

        
    }

    /**
     * Load routes that existed througt the project
     */
    LoadRoutes()
    {
        //Define routes
        //this.Server.use("/", require('./App/Routes/main.js'));
        this.Server.use("/Notification", require('./App/Routes/NotificationRoutes'));
        this.Server.use("/Loan", require('./App/Routes/LoanRoutes'));
    }
}

//execute the application
const app = new ApplicationMain();
app.Initialize();









