import { UpdateResult } from 'typeorm';
import { Todo } from '../entities/ToDo.entity';
import { ITodo } from '../types/todos.type';
export default class TodoService {
    findAll(): Promise<Todo[]>;
    findById(id: string): Promise<Todo | undefined>;
    create(body: ITodo, userId: string): Promise<Todo | undefined>;
    findPrivate(body: ITodo, userId: string): Promise<Todo[] | undefined>;
    updateById(id: string, body: ITodo): Promise<UpdateResult | undefined>;
    deleteTodoById(id: string): Promise<void>;
}
