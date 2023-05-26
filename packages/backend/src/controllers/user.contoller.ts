import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../entities/User.entity';
import { IUser } from '../types/user.type';
import UserService from '../services/user.service';
import { getAppDataSource } from '../config/database';

export class UserController {
  constructor(private userService: UserService) {}

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.findAll();

    res.status(200).json({
      error: false,
      data: {
        users
      }
    });
  }

  async getUserById(req: Request, res: Response) {
    const user = await this.userService.findById(req.params.id);

    res.status(200).json({
      error: false,
      data: {
        user
      }
    });
  }

  async getCurrentUser(req: Request, res: Response) {
    const { user }: IUser = req;
    const { password, ...userWithoutPassword } = user;

    res.status(200).json({
      error: false,
      data: {
        user: userWithoutPassword
      }
    });
  }

  async createUser(req: Request, res: Response) {
    const { firstName, lastName, email, password }: User = req.body;
    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));
    const dataSource = getAppDataSource();
    const existingUser = await dataSource.manager.findOneBy(User, { email });

    if (existingUser) {
      return res.status(400).json({
        error: true,
        message: 'User with such email already exist'
      });
    }

    const user = await this.userService.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    res.status(200).json({
      error: false,
      data: {
        user
      }
    });
  }

  async updateUser(req: Request, res: Response) {
    await this.userService.updateById(req.params.id, req.body);

    res.status(200).json({
      error: false,
      message: 'The give user was successfully updated'
    });
  }

  async resetUserPassword(req: Request, res: Response) {
    res.status(200).json({
      error: false,
      message: 'reset password route'
    });
  }
}

const userController = new UserController(new UserService());
export default userController;
