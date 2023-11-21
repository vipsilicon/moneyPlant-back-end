import { classToPlain } from 'class-transformer';
import { NextFunction, Request, Response } from 'express';

export async function responseHandler(req: Request, res: Response, next: NextFunction) {

    const oldRes = res.json;

    res.json = (data) => {
        const finalData = classToPlain(data);
        return oldRes.call(res, finalData);
    }

    next();
}