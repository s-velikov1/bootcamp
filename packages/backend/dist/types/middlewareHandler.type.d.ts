import { Request, Response, NextFunction } from 'express';
export type MiddlewareHandler = (req: Request, res: Response, next: NextFunction) => Promise<any> | void;
