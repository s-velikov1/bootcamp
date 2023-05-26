"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
function validate(validations) {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: true,
                message: 'Validation errors ocurred.',
                errors
            });
        }
        next();
    };
}
exports.validate = validate;
//# sourceMappingURL=validate.js.map