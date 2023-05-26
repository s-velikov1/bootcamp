import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
import { IUser } from '../types/user.type';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request, res: Response) {
    const todos = await this.todoService.findAll();

    res.status(200).json({
      error: false,
      data: {
        todos
      }
    });
  }

  async getTodoById(req: Request, res: Response) {
    const todo = await this.todoService.findById(req.params.id);

    res.status(200).json({
      error: false,
      data: {
        todo
      }
    });
  }

  async createTodo(req: Request, res: Response) {
    const todo = await this.todoService.create(req.body, (req.user as IUser).id);

    res.status(200).json({
      error: false,
      message: 'created',
      data: {
        todo
      }
    });
  }

  async findPrivateTodos(req: Request, res: Response) {
    const todos = await this.todoService.findPrivate(req.body, (req.user as IUser).id);

    res.status(200).json({
      error: false,
      data: {
        privateTodos: todos
      }
    });
  }

  async updateTodoById(req: Request, res: Response) {
    await this.todoService.updateById(req.params.id, req.body);

    res.status(200).json({
      error: false,
      message: 'The given todo was successfully updated'
    });
  }

  async deleteTodoById(req: Request, res: Response) {
    await this.todoService.deleteTodoById(req.params.id);

    res.status(200).json({
      error: false,
      message: 'The given todo was successfully deleted'
    });
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
