import React from 'react';
import { Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DefaultPageContainer } from '../default/defaultPageContainer.styled';
import { StyledLoginPageContainer } from './containers/login-page.container.styled';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';

const AuthPageComponent = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate(ROUTER_KEYS.LOGIN);
  };

  const handleRegisterClick = () => {
    navigate(ROUTER_KEYS.REGISTER);
  };

  const handleForgetPasswordClick = () => {
    navigate(ROUTER_KEYS.FORGET_PASSWORD);
  };

  return (
    <DefaultPageContainer>
      <StyledLoginPageContainer>
        <Typography variant="h3">Todo App</Typography>
        <Button className="action" onClick={handleLoginClick} variant="contained">
          Login
        </Button>
        <Button className="action" onClick={handleRegisterClick} variant="contained">
          Register
        </Button>
        <Link variant="button" onClick={handleForgetPasswordClick}>
          Forget password?
        </Link>
      </StyledLoginPageContainer>
    </DefaultPageContainer>
  );
};

export default AuthPageComponent;
