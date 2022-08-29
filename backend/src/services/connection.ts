import { Pool } from "pg";

const connection = new Pool({
   user: "postgres",
   host: "db",
   database: "postgres",
   password: "postgres",
   port: 5432
});

export default connection
