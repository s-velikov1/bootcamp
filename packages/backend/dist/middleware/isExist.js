"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExist = void 0;
const database_1 = require("../config/database");
function isExist(type, field) {
    return async (req, res, next) => {
        try {
            const value = field === 'id' ? req.params.id : req.body[field];
            const dataSource = (0, database_1.getAppDataSource)();
            const item = await dataSource.manager.findOneBy(type, { [field]: value });
            if (!item) {
                return res.status(400).json({
                    error: true,
                    message: `There is no item with such ${field}.`
                });
            }
            return next();
        }
        catch (error) {
            return res.status(500).json({
                error: true,
                message: error
            });
        }
    };
}
exports.isExist = isExist;
//# sourceMappingURL=isExist.js.map