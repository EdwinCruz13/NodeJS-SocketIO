const mssql = require('mssql');
const { Connection } = require('../../Config/Keys');

class sqlContext
{

    async GetData(query)
    {
        //create a pool
        let pool = new mssql.ConnectionPool(Connection);
        let result = null;
        let request = null;
    
        try {
            //open connection 
            await pool.connect();
    
            //create a request
            request = await pool.request();
    
            //execcute query
            result = await request.query(query);
        } catch (err) {
            console.log('SQL error: ' + err);
        } finally {
            request = null;
    
            //close connection
            await pool.close();
        }
    
        //return result
        return result;
    }
}

const Context = new sqlContext();
module.exports = Context;


