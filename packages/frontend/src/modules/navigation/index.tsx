import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageContainer from '../todo';
import TodoPageContainer from '../todo/todo-page';
import CreateTodoPageContainer from '../todo/createTodo';
import AuthPageComponent from '../auth';
import LoginPageComponent from '../auth/login-page';
import RegisterPageComponent from '../auth/register-page';
import ForgetPasswordPageComponent from '../auth/forget-password-page';
import UserPageComponent from '../auth/user-page';
import { APP_KEYS } from '../common/consts';
import RequireAuth from '../default/require-auth.component';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route
        element={
          <RequireAuth>
            <HomePageContainer />
          </RequireAuth>
        }
        path={APP_KEYS.ROUTER_KEYS.ROOT}
      />
      <Route
        element={
          <RequireAuth>
            <TodoPageContainer />
          </RequireAuth>
        }
        path={APP_KEYS.ROUTER_KEYS.TODO}
      />
      <Route
        element={
          <RequireAuth>
            <CreateTodoPageContainer />
          </RequireAuth>
        }
        path={APP_KEYS.ROUTER_KEYS.CREATE_TODO}
      />
      <Route
        element={
          <RequireAuth>
            <UserPageComponent />
          </RequireAuth>
        }
        path={APP_KEYS.ROUTER_KEYS.USER}
      />
      <Route Component={AuthPageComponent} path={APP_KEYS.ROUTER_KEYS.AUTH} />
      <Route Component={LoginPageComponent} path={APP_KEYS.ROUTER_KEYS.LOGIN} />
      <Route Component={RegisterPageComponent} path={APP_KEYS.ROUTER_KEYS.REGISTER} />
      <Route Component={ForgetPasswordPageComponent} path={APP_KEYS.ROUTER_KEYS.FORGET_PASSWORD} />
    </Routes>
  </Router>
);
