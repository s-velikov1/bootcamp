import { Request, Response } from 'express';
import UserService from '../services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(req: Request, res: Response): Promise<void>;
    getUserById(req: Request, res: Response): Promise<void>;
    getCurrentUser(req: Request, res: Response): Promise<void>;
    createUser(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    updateUser(req: Request, res: Response): Promise<void>;
    resetUserPassword(req: Request, res: Response): Promise<void>;
}
declare const userController: UserController;
export default userController;
