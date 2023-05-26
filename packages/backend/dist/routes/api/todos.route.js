"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToDo_entity_1 = require("../../entities/ToDo.entity");
const isExist_1 = require("../../middleware/isExist");
const todo_controller_1 = __importDefault(require("../../controllers/todo.controller"));
const validate_1 = require("../../middleware/validation/validate");
const todoRules_1 = require("../../middleware/validation/rules/todoRules");
const tryCatch_1 = require("../../middleware/tryCatch");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const todosRouter = (0, express_1.Router)();
todosRouter.get('/', (0, tryCatch_1.tryCatchMiddleware)(todo_controller_1.default.getAllTodo.bind(todo_controller_1.default)));
todosRouter.get('/:id', (0, tryCatch_1.tryCatchMiddleware)(auth_middleware_1.authMiddleware), (0, isExist_1.isExist)(ToDo_entity_1.Todo, 'id'), (0, tryCatch_1.tryCatchMiddleware)(todo_controller_1.default.getTodoById.bind(todo_controller_1.default)));
todosRouter.post('/', (0, tryCatch_1.tryCatchMiddleware)(auth_middleware_1.authMiddleware), (0, validate_1.validate)(todoRules_1.todoRules), (0, tryCatch_1.tryCatchMiddleware)(todo_controller_1.default.createTodo.bind(todo_controller_1.default)));
todosRouter.put('/:id', (0, tryCatch_1.tryCatchMiddleware)(auth_middleware_1.authMiddleware), (0, validate_1.validate)(todoRules_1.todoRules), (0, isExist_1.isExist)(ToDo_entity_1.Todo, 'id'), (0, tryCatch_1.tryCatchMiddleware)(todo_controller_1.default.updateTodoById.bind(todo_controller_1.default)));
todosRouter.delete('/:id', (0, tryCatch_1.tryCatchMiddleware)(auth_middleware_1.authMiddleware), (0, isExist_1.isExist)(ToDo_entity_1.Todo, 'id'), (0, tryCatch_1.tryCatchMiddleware)(todo_controller_1.default.deleteTodoById.bind(todo_controller_1.default)));
exports.default = todosRouter;
//# sourceMappingURL=todos.route.js.map