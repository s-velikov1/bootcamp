import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport = require('passport');
import { getAppDataSource } from './database';
import { User } from '../entities/User.entity';

export const passportConfig = () => {
  const options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  };

  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      const dataSource = getAppDataSource();
      const user = await dataSource.manager.findOneBy(User, { id: jwt_payload.id });

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    })
  );
};
