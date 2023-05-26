"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutMiddleware = void 0;
const logoutMiddleware = (_, res) => {
    res.status(200).json({
        error: false,
        message: 'Successfully logged out'
    });
};
exports.logoutMiddleware = logoutMiddleware;
//# sourceMappingURL=logout.middleware.js.map