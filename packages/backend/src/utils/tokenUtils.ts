import jwt from 'jsonwebtoken';

export const generateLoginToken = (payload: object): string =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

export const generateResetPassToken = (payload: object) =>
  jwt.sign(payload, process.env.JWT_RESET_SECRET, {
    expiresIn: process.env.JWT_RESET_EXPIRATION
  });
