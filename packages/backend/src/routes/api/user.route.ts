import { Router } from 'express';
import { tryCatchMiddleware } from '../../middleware/tryCatch';
import { validate } from '../../middleware/validation/validate';
import { userRules } from '../../middleware/validation/rules/userRules';
import userController from '../../controllers/user.contoller';
import { isExist } from '../../middleware/isExist';
import { User } from '../../entities/User.entity';
import { authMiddleware } from '../../middleware/auth.middleware';

const router: Router = Router();

router.get('/', tryCatchMiddleware(userController.getAllUsers.bind(userController)));
router.get(
  '/current',
  tryCatchMiddleware(authMiddleware),
  // isExist<User>(User, 'id'),
  tryCatchMiddleware(userController.getCurrentUser.bind(userController))
);
router.post(
  '/',
  validate(userRules),
  tryCatchMiddleware(userController.createUser.bind(userController))
);
router.post(
  '/:id',
  tryCatchMiddleware(authMiddleware),
  isExist<User>(User, 'id'),
  tryCatchMiddleware(userController.updateUser.bind(userController))
);

export default router;
