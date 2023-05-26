"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRules = void 0;
const express_validator_1 = require("express-validator");
exports.userRules = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Wrong email format'),
    (0, express_validator_1.body)('firstName').notEmpty().withMessage('First name is required'),
    (0, express_validator_1.body)('firstName').isString().withMessage('firstName field must be a string'),
    (0, express_validator_1.body)('lastName').notEmpty().withMessage('Last name is required'),
    (0, express_validator_1.body)('lastName').isString().withMessage('lastName field must be a string'),
    (0, express_validator_1.body)('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];
//# sourceMappingURL=userRules.js.map