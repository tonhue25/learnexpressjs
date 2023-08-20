var sql = require('mssql');
var config = {
    user: 'sa',
    password: '123',
    server: 'DESKTOP-53R2KEO',
    database: 'testDB',
    synchronize: true,
    trustServerCertificate: true,
};

async function connect() {
    try {
        await sql.connect(config, function (err) {
            if (err) console.log(err);
            // var request = new sql.Request();
            // request.query('select * from Employee', function (err, recordset) {
            //     if (err) console.log(err);
            //     console.log(recordset);
            // });
            // getEmployees();
        });
    } catch (err) {
        console.log(err);
    }
}

async function getEmployees() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query('select * from Employee');
        return products.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect, getEmployees };
