// const { Pool } = require('pg');

import { Pool } from "pg";


const pool = new Pool ({
   user: "postgres",
   host: "db",
   database: "postgres",
   password: "postgres",
   port: 5432   
});

pool.connect(() => console.log('Connected'));
// module.exports = pool

export default pool



