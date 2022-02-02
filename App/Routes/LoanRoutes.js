const express = require('express');
const Router = express.Router();
const { ListLoans, ListLoanJson} = require('../Controllers/LoanController')

//define routes using the controllers
Router.get("/ListLoans", ListLoans);
Router.get("/ListLoanJson", ListLoanJson);



//export routers
module.exports = Router;