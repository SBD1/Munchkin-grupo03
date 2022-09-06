import { Pool } from "https://deno.land/x/pg@v0.6.1/mod.ts";

const pool = new Pool({
    user: 'postgres',
    hostname: 'db',
    database: 'postgres',
    password: 'postgres',
    port: 5432
});

// const database = await pool.connect();

export default pool;