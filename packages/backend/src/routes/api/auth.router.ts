import { Router } from 'express';
import { tryCatchMiddleware } from '../../middleware/tryCatch';
import authController from '../../controllers/auth.controller';
import { validate } from '../../middleware/validation/validate';
import { resetPasswordRules } from '../../middleware/validation/rules/authRules';
import { authMiddleware } from '../../middleware/auth.middleware';

const router: Router = Router();

router.post('/login', tryCatchMiddleware(authController.login.bind(authController)));

router.post(
  '/forgot-password',
  tryCatchMiddleware(authController.forgotPassword.bind(authController))
);

router.post(
  '/reset-password/:id',
  validate(resetPasswordRules),
  tryCatchMiddleware(authController.resetPassword.bind(authController))
);

router.get('/', tryCatchMiddleware(authMiddleware), authController.isLoggedIn);

export default router;
