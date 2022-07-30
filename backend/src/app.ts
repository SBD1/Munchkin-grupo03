
import * as express from 'express';
import routes from './routes';


class App {
  server: express.Express;
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}
const app = new App().server
export default app;