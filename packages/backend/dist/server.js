"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./config/database"));
const passport_2 = require("./config/passport");
const app = (0, express_1.default)();
const router = new routes_1.default(app);
(0, database_1.default)();
app.set('port', process.env.PORT || 4200);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(passport_1.default.initialize());
(0, passport_2.passportConfig)();
router.init();
const port = app.get('port');
const server = app.listen(port, () => console.log(`Server started on port ${port}`));
process.on('SIGINT', () => {
    server.close(() => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0);
    });
});
exports.default = server;
//# sourceMappingURL=server.js.map