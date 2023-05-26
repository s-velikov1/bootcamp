"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidResetToken = exports.authMiddleware = void 0;
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    passport_1.default.authenticate('jwt', { session: false }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                error: true,
                message: 'Unauthorized'
            });
        }
        req.user = user;
        next();
    })(req, res, next);
};
exports.authMiddleware = authMiddleware;
function isValidResetToken() {
    return async (req, res, next) => {
        try {
            const isValid = jsonwebtoken_1.default.verify(req.params.id, process.env.JWT_RESET_SECRET);
            if (isValid) {
                return next();
            }
        }
        catch (error) {
            return res.json({
                error: true,
                message: 'Your reset password link expired'
            });
        }
    };
}
exports.isValidResetToken = isValidResetToken;
//# sourceMappingURL=auth.middleware.js.map