// Conexión con la base de datos en CleverCloud
const { createPool } = require("mysql2");

const pool = createPool({
    host: 'bpzg1njmdcnibufauuaa-mysql.services.clever-cloud.com',
    user: 'uotizaurkmrczzpj',
    password: 'uotizaurkmrczzpj',
    port: 3306,
    database: 'bpzg1njmdcnibufauuaa',
    timezone: 'Z'
});

module.exports = pool.promise();