import { UpdateResult } from 'typeorm';
import { Todo } from '../entities/ToDo.entity';
import { ITodo } from '../types/todos.type';
import { getAppDataSource } from '../config/database';

export default class TodoService {
  async findAll(): Promise<Todo[]> {
    const dataSource = getAppDataSource();
    const data = await dataSource.manager.find(Todo);

    return data;
  }

  async findById(id: string): Promise<Todo | undefined> {
    try {
      const dataSource = getAppDataSource();
      const todo = await dataSource.manager.findOneBy(Todo, { id });

      return todo!;
    } catch (error) {
      console.error(error);
    }
  }

  async create(body: ITodo, userId: string): Promise<Todo | undefined> {
    try {
      const dataSource = getAppDataSource();
      const newTodo = dataSource.manager.create(Todo, {
        ...body,
        userId
      });

      await dataSource.manager.save(newTodo);

      return newTodo;
    } catch (error) {
      console.error(error);
    }
  }

  async findPrivate(body: ITodo, userId: string): Promise<Todo[] | undefined> {
    try {
      const dataSource = getAppDataSource();
      const todos = await dataSource.manager.findBy(Todo, { isPrivate: true, userId });

      return todos;
    } catch (error) {
      console.error(error);
    }
  }

  async updateById(id: string, body: ITodo): Promise<UpdateResult | undefined> {
    try {
      const dataSource = getAppDataSource();
      const updatedEntity = await dataSource.manager.update(Todo, { id }, { ...body });

      return updatedEntity;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTodoById(id: string): Promise<void> {
    try {
      const dataSource = getAppDataSource();

      await dataSource.manager.delete(Todo, { id });
    } catch (error) {
      console.error(error);
    }
  }
}
