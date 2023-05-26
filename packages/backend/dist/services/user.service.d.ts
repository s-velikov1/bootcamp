import { UpdateResult } from 'typeorm';
import { User } from '../entities/User.entity';
import { IUser } from '../types/user.type';
export default class UserService {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    create(body: Omit<IUser, 'id'>): Promise<User | undefined>;
    updateById(id: string, body: IUser): Promise<UpdateResult | undefined>;
    updatePassword(id: string, password: string): Promise<UpdateResult | undefined>;
}
