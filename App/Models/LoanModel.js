const sqlContext = require('../../Config/sqlContext');


/**
 * Summarize: Create a class that allowed to get the information
 *            and validate the request and response
 */
class LoanModel{

    /**
     * Summarize: Get all the list of notification
     * @returns the recordeset obtained from database functions
     */
    async GetAmount() {
       const list = await sqlContext.GetData('EXEC spr_GraficaPrestamo');
       return list?.recordset;
    }
}



//export as object
module.exports = new LoanModel();