import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';

import cors from 'cors';
import passport from 'passport';
import AppRouter from './routes';
import connectDB from './config/database';
import { passportConfig } from './config/passport';

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

// Passport configuration
app.use(passport.initialize());
passportConfig();

router.init();

const port = app.get('port');
// eslint-disable-next-line no-console
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

export default server;
