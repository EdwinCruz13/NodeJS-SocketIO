const mssql = require('mssql');
const { Connection } = require('./Keys');

//class that allow the execution of query from sql server database
class sqlContext
{

    //get data using a simple common sql as select or stored procedure
    async GetData(query)
    {
        //create a pool
        let pool = await new mssql.ConnectionPool(Connection);
        
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

//export context
const Context = new sqlContext();
module.exports = Context;


