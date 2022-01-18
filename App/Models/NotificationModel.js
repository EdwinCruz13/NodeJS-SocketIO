const sqlContext = require('../../Config/sqlContext');


//create a class that allowed to get the information
//and validate the request and response
class NotificationModel{
    async GetAll() {
       const list = await sqlContext.GetData('EXEC spr_Notificacion');
       return list?.recordset;
    }
}


const Model = new NotificationModel();
module.exports = Model;




