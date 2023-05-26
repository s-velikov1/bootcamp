import { Request, Response, NextFunction } from 'express';
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export declare function isValidResetToken(): (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
