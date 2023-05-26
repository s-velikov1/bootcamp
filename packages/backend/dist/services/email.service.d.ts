interface EmailOptions {
    to: string;
    subject: string;
    content: string;
}
export default class EmailService {
    private transporter;
    constructor();
    sendEmail(options: EmailOptions): Promise<void>;
    sendPasswordResetEmail(userEmail: string, resetToken: string): Promise<void>;
}
export {};
