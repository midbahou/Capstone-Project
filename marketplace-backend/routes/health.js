import { Router } from "express";

// import express from 'express'; // This is the same this as importing Router and do: new Router()
// const healthRouter = express.Router();

export const healthRouter = new Router();

healthRouter.get('/', (req, res) => {
    res.status(200).json({
        "status": "OK!"
    })
});
