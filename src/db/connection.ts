// deno run --allow-net --allow-read mod.ts
import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";

const client = new Client({
  user: "postgres",
  database: "postgres",
  hostname: "localhost",
  password: "postgres",
  port: 5432,
});
await client.connect();

{
  const result = await client.queryArray("SELECT * FROM sala");
  console.log(result.rows); // [[1, 'Carlos'], [2, 'John'], ...]
}

await client.end();