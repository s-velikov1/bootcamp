"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRules = void 0;
const express_validator_1 = require("express-validator");
exports.todoRules = [
    (0, express_validator_1.body)('title').isString().withMessage('Title must be a string.'),
    (0, express_validator_1.body)('description').isString().withMessage('Description must be a string.'),
    (0, express_validator_1.body)('isPrivate').isBoolean().withMessage('isPrivate field must be a boolean,'),
    (0, express_validator_1.body)('isCompleted').isBoolean().withMessage('isCompleted field must be a boolean,')
];
//# sourceMappingURL=todoRules.js.map