import { body } from 'express-validator';

export const userRules = [
  body('email').isEmail().withMessage('Wrong email format'),
  body('firstName').notEmpty().withMessage('First name is required'),
  body('firstName').isString().withMessage('firstName field must be a string'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('lastName').isString().withMessage('lastName field must be a string'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];
