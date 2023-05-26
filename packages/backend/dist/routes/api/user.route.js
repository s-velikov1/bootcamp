"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tryCatch_1 = require("../../middleware/tryCatch");
const validate_1 = require("../../middleware/validation/validate");
const userRules_1 = require("../../middleware/validation/rules/userRules");
const user_contoller_1 = __importDefault(require("../../controllers/user.contoller"));
const isExist_1 = require("../../middleware/isExist");
const User_entity_1 = require("../../entities/User.entity");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.get('/', (0, tryCatch_1.tryCatchMiddleware)(user_contoller_1.default.getAllUsers.bind(user_contoller_1.default)));
router.get('/current', (0, tryCatch_1.tryCatchMiddleware)(auth_middleware_1.authMiddleware), (0, tryCatch_1.tryCatchMiddleware)(user_contoller_1.default.getCurrentUser.bind(user_contoller_1.default)));
router.post('/', (0, validate_1.validate)(userRules_1.userRules), (0, tryCatch_1.tryCatchMiddleware)(user_contoller_1.default.createUser.bind(user_contoller_1.default)));
router.post('/:id', (0, tryCatch_1.tryCatchMiddleware)(auth_middleware_1.authMiddleware), (0, isExist_1.isExist)(User_entity_1.User, 'id'), (0, tryCatch_1.tryCatchMiddleware)(user_contoller_1.default.updateUser.bind(user_contoller_1.default)));
exports.default = router;
//# sourceMappingURL=user.route.js.map