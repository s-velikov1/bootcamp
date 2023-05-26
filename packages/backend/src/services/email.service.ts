import nodemailer, { Transporter } from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  content: string;
}

export default class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    });
  }

  public async sendEmail(options: EmailOptions): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: options.to,
        subject: options.subject,
        html: options.content
      });
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  }

  public async sendPasswordResetEmail(userEmail: string, resetToken: string) {
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
