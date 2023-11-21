import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '../../models/enum/http-status';
import { HttpException } from './http-exception';


export async function errorHandler(err:any | any, req: Request, res: Response, next: NextFunction){
  if(err instanceof HttpException){
    return res.status(err.status ?? HttpStatus.INTERNAL_SERVER_ERROR).json(err);
  }  
  return next(err);
}