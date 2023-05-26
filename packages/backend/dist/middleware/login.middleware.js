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
exports.loginMiddleware = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_1 = require("../config/database");
const User_entity_1 = require("../entities/User.entity");
const tokenUtils_1 = require("../utils/tokenUtils");
const loginMiddleware = async (_, res) => {
    const dataSource = (0, database_1.getAppDataSource)();
    const user = await dataSource.manager.findOneBy(User_entity_1.User, { email: _.body.email });
    if (!user) {
        return res.status(400).json({
            error: true,
            message: 'Incorrect email or password'
        });
    }
    const isMatching = await bcryptjs_1.default.compare(_.body.password, user.password);
    if (!isMatching) {
        return res.status(400).json({
            error: true,
            message: 'Incorrect email or password'
        });
    }
    const { password } = user, payloadWithoutPassword = __rest(user, ["password"]);
    const token = (0, tokenUtils_1.generateToken)(payloadWithoutPassword);
    return res.status(200).json({
        token
    });
};
exports.loginMiddleware = loginMiddleware;
//# sourceMappingURL=login.middleware.js.map