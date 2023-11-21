import http from 'http';
import { makeApp } from "./app";

async function bootstrap(){

    const app = makeApp();

    const server = http.createServer(app.express);

    const PORT = 8081;

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}`)
    })
}

bootstrap()