import { Request, Response } from 'express';
import UserService from '../services/user.service';
import EmailService from '../services/email.service';
export declare class AuthController {
    private userService;
    private emailService;
    constructor(userService: UserService, emailService: EmailService);
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    isLoggedIn(req: Request, res: Response): Promise<void>;
    forgotPassword(req: Request, res: Response): Promise<void>;
    resetPassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const authController: AuthController;
export default authController;
