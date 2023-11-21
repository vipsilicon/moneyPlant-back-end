import express, { Express } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { responseHandler } from './shared/utils/http/reponse-handler';
import { makeRoutes } from './routes';
import { errorHandler } from './shared/utils/http/error-handler';

class App {

    express: Express;

    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.enable('trust proxy');

        this.express.use(cors());
        this.express.use(express.urlencoded({ limit: '5mb', extended: true}));
        this.express.use(express.json({ limit: '5mb'}));
        this.express.use(responseHandler)
    }

    routes(){
        const routes = makeRoutes();
        const expressRouter = routes.initialize();
        this.express.use(expressRouter);
        this.express.use(errorHandler)
    }
}

export const makeApp = ():App => {
    return new App()
}
