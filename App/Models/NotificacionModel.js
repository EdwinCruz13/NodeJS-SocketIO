const sqlContext = require('../../Config/sqlContext');


//
class NotificacionModel{
    async GetAll() {
       const list = await sqlContext.GetData('EXEC spr_Notificacion');
       return list?.recordset;
    }
}


const Model = new NotificacionModel();
module.exports = Model;




