
import a from "../connections"

async function createTable() {
  a.connect(() => console.log('Connected'));

  await a.query(`
    create table if not exists people (
      id integer not null,
      name varchar,
      primary key (id)
    )
  `);
  console.log('Table created');

}

createTable();
