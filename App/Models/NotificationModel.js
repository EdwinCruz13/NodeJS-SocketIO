const sqlContext = require('../../Config/sqlContext');


/**
 * Summarize: Create a class that allowed to get the information
 *            and validate the request and response
 */
class NotificationModel{

    /**
     * Summarize: Get all the list of notification
     * @returns the recordeset obtained from database functions
     */
    async GetAll() {
       const list = await sqlContext.GetData('EXEC spr_Notificacion');
       return list?.recordset;
    }
}



//export as object
module.exports = new NotificationModel();




