"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResetPassToken = exports.generateLoginToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateLoginToken = (payload) => jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
exports.generateLoginToken = generateLoginToken;
const generateResetPassToken = (payload) => jsonwebtoken_1.default.sign(payload, process.env.JWT_RESET_SECRET, {
    expiresIn: process.env.JWT_RESET_EXPIRATION
});
exports.generateResetPassToken = generateResetPassToken;
//# sourceMappingURL=tokenUtils.js.map