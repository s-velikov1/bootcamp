"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatchMiddleware = void 0;
const tryCatchMiddleware = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    }
    catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).json({
                error: true,
                message: 'Internal server error!',
                err: error.message
            });
        }
    }
};
exports.tryCatchMiddleware = tryCatchMiddleware;
//# sourceMappingURL=tryCatch.js.map