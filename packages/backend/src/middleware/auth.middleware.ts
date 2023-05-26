import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { IUser } from '../types/user.type';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: IUser) => {
    if (err || !user) {
      return res.status(401).json({
        error: true,
        message: 'Unauthorized'
      });
    }

    req.user = user;

    next();
  })(req, res, next);
};

export function isValidResetToken() {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const isValid = jwt.verify(req.params.id, process.env.JWT_RESET_SECRET);

      if (isValid) {
        return next();
      }
    } catch (error) {
      return res.json({
        error: true,
        message: 'Your reset password link expired'
      });
    }
  };
}
