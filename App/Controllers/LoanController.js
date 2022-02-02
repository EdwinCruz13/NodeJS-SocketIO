//imports 
const {request, response} = require('express');
const LoanModel = require('../Models/LoanModel');

/**
 * Summary: Create notification controller class
 */
class LoanController
{
    
    /**
     * Summarize: List of notification
     * @param {request from url} req 
     * @param {response to url} res 
     */
    async ListLoans(req, res)
    {
        res.render('./Loan/List');
    }



    /**
     * get the list of notification of the year
     * execute a stored procedure and get the amount of year
     * @param {*} req 
     * @param {*} res 
     */
    async ListLoanJson(req, res)
    {
        const list = await LoanModel.GetAmount();
        //let jsonString = { name: Number, data = [] };

        //run through the result from list and become into array
        const result = [{}];
        for (let index = 0; index < list.length; ++index) {
            const element = list[index];
            result.push({name: list[index].TipoPrestamo, y: list[index].Desembolsado});
        }

        //console.log(result);

        //declare a object
        /*const jsonString = {
            name: list[0].year,
            data: result
        }*/

        res.json(result);
    }

}

//exports class controller as object
module.exports = new LoanController() ;

