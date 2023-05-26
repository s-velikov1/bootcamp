"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class EmailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        });
    }
    async sendEmail(options) {
        try {
            await this.transporter.sendMail({
                from: process.env.MAIL_USERNAME,
                to: options.to,
                subject: options.subject,
                html: options.content
            });
        }
        catch (error) {
            console.error('Error sending email: ', error);
        }
    }
    async sendPasswordResetEmail(userEmail, resetToken) {
        const resetLink = `${process.env.RESET_LINK}/${resetToken}`;
        const emailContent = `
      <h3>Password Reset</h3>
      <p>You have requested to reset your password. Please click the link below to proceed with the password reset process:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>If you did not initiate this request, you can safely ignore this email.</p>
    `;
        await this.sendEmail({
            to: userEmail,
            subject: 'Password Reset',
            content: emailContent
        });
    }
}
exports.default = EmailService;
//# sourceMappingURL=email.service.js.map