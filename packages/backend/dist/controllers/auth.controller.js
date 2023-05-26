"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_service_1 = __importDefault(require("../services/user.service"));
const email_service_1 = __importDefault(require("../services/email.service"));
const tokenUtils_1 = require("../utils/tokenUtils");
class AuthController {
    constructor(userService, emailService) {
        this.userService = userService;
        this.emailService = emailService;
    }
    async login(req, res) {
        const { email } = req.body;
        const user = await this.userService.findByEmail(email);
        if (!user) {
            return res.status(400).json({
                error: true,
                message: 'Incorrect email or password'
            });
        }
        const isMatching = await bcryptjs_1.default.compare(req.body.password, user.password);
        if (!isMatching) {
            return res.status(400).json({
                error: true,
                message: 'Incorrect email or password'
            });
        }
        const { password } = user, payloadWithoutPassword = __rest(user, ["password"]);
        const token = (0, tokenUtils_1.generateLoginToken)(payloadWithoutPassword);
        return res.status(200).json({
            error: false,
            token
        });
    }
    async isLoggedIn(req, res) {
        res.status(200).json({
            error: false,
            message: 'Authorized'
        });
    }
    async forgotPassword(req, res) {
        const { email } = req.body;
        const user = await this.userService.findByEmail(email);
        if (user) {
            const token = (0, tokenUtils_1.generateResetPassToken)({ email });
            await this.emailService.sendPasswordResetEmail(email, token);
        }
        res.json({
            error: false,
            message: 'email sent'
        });
    }
    async resetPassword(req, res) {
        try {
            const payload = jsonwebtoken_1.default.decode(req.params.id);
            const { email } = payload;
            const { newPassword, confirmPassword } = req.body;
            const isPasswordMatch = newPassword === confirmPassword;
            const user = await this.userService.findByEmail(email);
            if (user && isPasswordMatch) {
                const hashedPassword = await bcryptjs_1.default.hash(newPassword, Number(process.env.SALT));
                await this.userService.updatePassword(user.id, hashedPassword);
            }
            return res.json({
                error: false,
                token: req.params.id,
                payload
            });
        }
        catch (error) {
            return res.json({
                error: true,
                message: 'Your reset password link expired'
            });
        }
    }
}
exports.AuthController = AuthController;
const authController = new AuthController(new user_service_1.default(), new email_service_1.default());
exports.default = authController;
//# sourceMappingURL=auth.controller.js.map