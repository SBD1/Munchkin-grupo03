import { Router } from "express";
import testController from "./controllers/testController";


const routes = Router()

routes.get('/',testController.test1 as any)


export default routes;