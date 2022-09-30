const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({
              user: 'SA',
              password: '12345OHdf%e',
              server: 'localhost',
              database: 'check',
              port: 1433,
              trustServerCertificate: true,
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();