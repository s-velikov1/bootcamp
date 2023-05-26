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
exports.UserController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_entity_1 = require("../entities/User.entity");
const user_service_1 = __importDefault(require("../services/user.service"));
const database_1 = require("../config/database");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUsers(req, res) {
        const users = await this.userService.findAll();
        res.status(200).json({
            error: false,
            data: {
                users
            }
        });
    }
    async getUserById(req, res) {
        const user = await this.userService.findById(req.params.id);
        res.status(200).json({
            error: false,
            data: {
                user
            }
        });
    }
    async getCurrentUser(req, res) {
        const { user } = req;
        const { password } = user, userWithoutPassword = __rest(user, ["password"]);
        res.status(200).json({
            error: false,
            data: {
                user: userWithoutPassword
            }
        });
    }
    async createUser(req, res) {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcryptjs_1.default.hash(password, Number(process.env.SALT));
        const dataSource = (0, database_1.getAppDataSource)();
        const existingUser = await dataSource.manager.findOneBy(User_entity_1.User, { email });
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
    async updateUser(req, res) {
        await this.userService.updateById(req.params.id, req.body);
        res.status(200).json({
            error: false,
            message: 'The give user was successfully updated'
        });
    }
    async resetUserPassword(req, res) {
        res.status(200).json({
            error: false,
            message: 'reset password route'
        });
    }
}
exports.UserController = UserController;
const userController = new UserController(new user_service_1.default());
exports.default = userController;
//# sourceMappingURL=user.contoller.js.map