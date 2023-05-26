import { Request, Response, NextFunction } from 'express';
import { MiddlewareHandler } from '../types/middlewareHandler.type';

export const tryCatchMiddleware =
  (handler: MiddlewareHandler): MiddlewareHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        res.status(500).json({
          error: true,
          message: 'Internal server error!',
          err: error.message
        });
      }
    }
  };
