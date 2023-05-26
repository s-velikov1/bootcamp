import { body } from 'express-validator';

export const resetPasswordRules = [
  body('newPassword')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters long'),

  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error('Passwords do not match');
      }

      return true;
    })
    .withMessage('Passwords must match')
];
