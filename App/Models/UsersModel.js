const sqlContext = require('../Models/sqlContext');


class UserModel{
    
    async GetAll() {
       const list = await sqlContext.GetData('SELECT * FROM Empleado ORDER BY Id ASC');
       return list?.recordset;
    }
}


const Model = new UserModel();
module.exports = Model;




