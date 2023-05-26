import { UpdateResult } from 'typeorm';
import { User } from '../entities/User.entity';
import { IUser } from '../types/user.type';
import { getAppDataSource } from '../config/database';

export default class UserService {
  async findAll(): Promise<User[]> {
    const dataSource = getAppDataSource();
    const data = await dataSource.manager.find(User);

    return data;
  }

  async findById(id: string): Promise<User | undefined> {
    try {
      const dataSource = getAppDataSource();
      const user = await dataSource.manager.findOneBy(User, { id });

      return user!;
    } catch (error) {
      console.error(error);
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    try {
      const dataSource = getAppDataSource();
      const user = await dataSource.manager.findOneBy(User, { email });

      return user!;
    } catch (error) {
      console.error(error);
    }
  }

  async create(body: Omit<IUser, 'id'>): Promise<User | undefined> {
    try {
      const dataSource = getAppDataSource();
      const newTodo = dataSource.manager.create(User, {
        ...body
      });

      await dataSource.manager.save(newTodo);

      return newTodo;
    } catch (error) {
      console.error(error);
    }
  }

  async updateById(id: string, body: IUser): Promise<UpdateResult | undefined> {
    try {
      const dataSource = getAppDataSource();
      const updatedEntity = await dataSource.manager.update(User, { id }, { ...body });

      return updatedEntity;
    } catch (error) {
      console.error(error);
    }
  }

  async updatePassword(id: string, password: string): Promise<UpdateResult | undefined> {
    try {
      const dataSource = getAppDataSource();
      const updatedEntity = await dataSource.manager.update(User, { id }, { password });

      return updatedEntity;
    } catch (error) {
      console.error(error);
    }
  }
}
