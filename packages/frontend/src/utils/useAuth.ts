import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../modules/common/consts/app-keys.const';
import { defaultAuthService } from '../modules/auth/services/auth.service';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      await defaultAuthService.checkAuth();
      return true;
    } catch (error) {
      localStorage.removeItem(ROUTER_KEYS.LOGIN_TOKEN_NAME);
      return false;
    }
  };

  const login = async (authData: object) => {
    const data = await defaultAuthService.login(authData);
    console.log(data);
    localStorage.setItem(ROUTER_KEYS.LOGIN_TOKEN_NAME, data?.data.token);
    setIsLoggedIn(true);
  };

  const register = async (registerData: object) => {
    await defaultAuthService.register(registerData);
  };

  const resetPassword = async (resetData: object) => {
    await defaultAuthService.resetPassword(resetData);
  };

  const logout = () => {
    localStorage.removeItem(ROUTER_KEYS.LOGIN_TOKEN_NAME);
    setIsLoggedIn(false);
    navigate(ROUTER_KEYS.AUTH);
  };

  return { isLoggedIn, login, register, resetPassword, logout, checkAuth };
};
