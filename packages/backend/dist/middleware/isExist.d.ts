import { Request, Response, NextFunction } from 'express';
import { ObjectType } from 'typeorm';
export declare function isExist<T>(type: ObjectType<T>, field: string): (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
