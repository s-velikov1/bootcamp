import { Request, Response } from 'express';
export declare const loginMiddleware: (_: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
