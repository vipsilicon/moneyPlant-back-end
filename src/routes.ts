import express from 'express';


const router = express.Router();

class Routes {

    initialize(){
        router.get("/", (req, res) => {
            res.json({
                status: "active"
            })
        })

        return router;
    }
}

export const makeRoutes = (): Routes => {
    return new Routes();
}