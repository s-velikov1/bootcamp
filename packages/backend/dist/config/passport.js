"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passportConfig = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport = require("passport");
const database_1 = require("./database");
const User_entity_1 = require("../entities/User.entity");
const passportConfig = () => {
    const options = {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()
    };
    passport.use(new passport_jwt_1.Strategy(options, async (jwt_payload, done) => {
        const dataSource = (0, database_1.getAppDataSource)();
        const user = await dataSource.manager.findOneBy(User_entity_1.User, { id: jwt_payload.id });
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }));
};
exports.passportConfig = passportConfig;
//# sourceMappingURL=passport.js.map