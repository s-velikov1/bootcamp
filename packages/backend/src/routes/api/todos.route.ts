import { Router } from 'express';
import { Todo } from '../../entities/ToDo.entity';
import { isExist } from '../../middleware/isExist';
import todoController from '../../controllers/todo.controller';
import { validate } from '../../middleware/validation/validate';
import { todoRules } from '../../middleware/validation/rules/todoRules';
import { tryCatchMiddleware } from '../../middleware/tryCatch';
import { authMiddleware } from '../../middleware/auth.middleware';

const todosRouter: Router = Router();

todosRouter.get('/', tryCatchMiddleware(todoController.getAllTodo.bind(todoController)));
todosRouter.get(
  '/:id',
  tryCatchMiddleware(authMiddleware),
  isExist<Todo>(Todo, 'id'),
  tryCatchMiddleware(todoController.getTodoById.bind(todoController))
);
todosRouter.post(
  '/',
  tryCatchMiddleware(authMiddleware),
  validate(todoRules),
  tryCatchMiddleware(todoController.createTodo.bind(todoController))
);
todosRouter.put(
  '/:id',
  tryCatchMiddleware(authMiddleware),
  validate(todoRules),
  isExist<Todo>(Todo, 'id'),
  tryCatchMiddleware(todoController.updateTodoById.bind(todoController))
);
todosRouter.delete(
  '/:id',
  tryCatchMiddleware(authMiddleware),
  isExist<Todo>(Todo, 'id'),
  tryCatchMiddleware(todoController.deleteTodoById.bind(todoController))
);

export default todosRouter;
