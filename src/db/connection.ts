// deno run --allow-net --allow-read mod.ts
import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";

const client = new Client({
  user: "postgres",
  database: "postgres",
  hostname: "db",
  password: "postgres",
  port: 5432,
});

export default client;
