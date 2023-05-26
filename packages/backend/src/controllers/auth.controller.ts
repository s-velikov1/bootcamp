import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';
import EmailService from '../services/email.service';
import { generateLoginToken, generateResetPassToken } from '../utils/tokenUtils';

export class AuthController {
  private userService: UserService;

  private emailService: EmailService;

  constructor(userService: UserService, emailService: EmailService) {
    this.userService = userService;
    this.emailService = emailService;
  }

  async login(req: Request, res: Response) {
    const { email } = req.body;
    const user = await this.userService.findByEmail(email);

    if (!user) {
      return res.status(400).json({
        error: true,
        message: 'Incorrect email or password'
      });
    }

    const isMatching = await bcrypt.compare(req.body.password, user.password);

    if (!isMatching) {
      return res.status(400).json({
        error: true,
        message: 'Incorrect email or password'
      });
    }

    const { password, ...payloadWithoutPassword } = user;

    const token = generateLoginToken(payloadWithoutPassword);

    return res.status(200).json({
      error: false,
      token
    });
  }

  async isLoggedIn(req: Request, res: Response) {
    res.status(200).json({
      error: false,
      message: 'Authorized'
    });
  }

  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;
    const user = await this.userService.findByEmail(email);

    if (user) {
      const token = generateResetPassToken({ email });
      await this.emailService.sendPasswordResetEmail(email, token);
    }

    res.json({
      error: false,
      message: 'email sent'
    });
  }

  async resetPassword(req: Request, res: Response) {
    try {
      const payload: any = jwt.decode(req.params.id);
      const { email } = payload;

      const { newPassword, confirmPassword } = req.body;
      const isPasswordMatch = newPassword === confirmPassword;
      const user = await this.userService.findByEmail(email);

      if (user && isPasswordMatch) {
        const hashedPassword = await bcrypt.hash(newPassword, Number(process.env.SALT));
        await this.userService.updatePassword(user.id, hashedPassword);
      }

      return res.json({
        error: false,
        token: req.params.id,
        payload
      });
    } catch (error) {
      return res.json({
        error: true,
        message: 'Your reset password link expired'
      });
    }
  }
}

const authController = new AuthController(new UserService(), new EmailService());
export default authController;
