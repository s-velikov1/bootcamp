import { body } from 'express-validator';

export const todoRules = [
  body('title').isString().withMessage('Title must be a string.'),
  body('description').isString().withMessage('Description must be a string.'),
  body('isPrivate').isBoolean().withMessage('isPrivate field must be a boolean,'),
  body('isCompleted').isBoolean().withMessage('isCompleted field must be a boolean,')
];
