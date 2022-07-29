import express from 'express'

import { Router, Request, Response } from 'express';

const port = 3333; 

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(port)
console.log('******************************');
console.log(`        SERVER STARTED        `);
console.log(`    Listening on port ${port} `);
console.log('******************************');