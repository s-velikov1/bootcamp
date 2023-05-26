"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordRules = void 0;
const express_validator_1 = require("express-validator");
exports.resetPasswordRules = [
    (0, express_validator_1.body)('newPassword')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long'),
    (0, express_validator_1.body)('confirmPassword')
        .custom((value, { req }) => {
        if (value !== req.body.newPassword) {
            throw new Error('Passwords do not match');
        }
        return true;
    })
        .withMessage('Passwords must match')
];
//# sourceMappingURL=authRules.js.map