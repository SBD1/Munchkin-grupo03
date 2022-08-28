import { Pool } from "pg";

const connection = new Pool({
   user: "postgres",
   host: "localhost",
   database: "munchkin",
   password: "postgres",
   port: 5432
});

export default connection
