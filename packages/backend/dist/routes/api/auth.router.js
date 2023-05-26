"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tryCatch_1 = require("../../middleware/tryCatch");
const auth_controller_1 = __importDefault(require("../../controllers/auth.controller"));
const validate_1 = require("../../middleware/validation/validate");
const authRules_1 = require("../../middleware/validation/rules/authRules");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.post('/login', (0, tryCatch_1.tryCatchMiddleware)(auth_controller_1.default.login.bind(auth_controller_1.default)));
router.post('/forgot-password', (0, tryCatch_1.tryCatchMiddleware)(auth_controller_1.default.forgotPassword.bind(auth_controller_1.default)));
router.post('/reset-password/:id', (0, validate_1.validate)(authRules_1.resetPasswordRules), (0, tryCatch_1.tryCatchMiddleware)(auth_controller_1.default.resetPassword.bind(auth_controller_1.default)));
router.get('/', (0, tryCatch_1.tryCatchMiddleware)(auth_middleware_1.authMiddleware), auth_controller_1.default.isLoggedIn);
exports.default = router;
//# sourceMappingURL=auth.router.js.map