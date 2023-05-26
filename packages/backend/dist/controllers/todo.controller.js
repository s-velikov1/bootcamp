"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_service_1 = __importDefault(require("../services/todo.service"));
class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getAllTodo(req, res) {
        const todos = await this.todoService.findAll();
        res.status(200).json({
            error: false,
            data: {
                todos
            }
        });
    }
    async getTodoById(req, res) {
        const todo = await this.todoService.findById(req.params.id);
        res.status(200).json({
            error: false,
            data: {
                todo
            }
        });
    }
    async createTodo(req, res) {
        const todo = await this.todoService.create(req.body, req.user.id);
        res.status(200).json({
            error: false,
            message: 'created',
            data: {
                todo
            }
        });
    }
    async findPrivateTodos(req, res) {
        const todos = await this.todoService.findPrivate(req.body, req.user.id);
        res.status(200).json({
            error: false,
            data: {
                privateTodos: todos
            }
        });
    }
    async updateTodoById(req, res) {
        await this.todoService.updateById(req.params.id, req.body);
        res.status(200).json({
            error: false,
            message: 'The given todo was successfully updated'
        });
    }
    async deleteTodoById(req, res) {
        await this.todoService.deleteTodoById(req.params.id);
        res.status(200).json({
            error: false,
            message: 'The given todo was successfully deleted'
        });
    }
}
exports.TodoController = TodoController;
const todoController = new TodoController(new todo_service_1.default());
exports.default = todoController;
//# sourceMappingURL=todo.controller.js.map