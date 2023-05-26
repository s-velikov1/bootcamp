import { Application } from 'express';
import todosRouter from './api/todos.route';
import userRouter from './api/user.route';
import authRouter from './api/auth.router';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/todos', todosRouter);
    this.app.use('/api/user', userRouter);
    this.app.use('/api/auth', authRouter);
  }
}

export default AppRouter;
