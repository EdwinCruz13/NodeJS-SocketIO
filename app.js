//Imports
require('dotenv').config(); //execute global variable
const Express = require('express'); //require express server
const Cors = require('cors');


//variables
const PORT = process.env.SERVER_PORT || 3000;


//middleware
const server = Express();
server.use(Cors());
server.use(Express.json());

//routes
server.use("/", require('./App/Routes/main.js'));

//execute server
server.listen(PORT, () => {
    console.log(`Server executed on port ${PORT}`);
})