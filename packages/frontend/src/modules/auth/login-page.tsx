import React from 'react';
import { Typography } from '@mui/material';
import { StyledLoginPageContainer } from './containers/login-page.container.styled';
import LoginFormComponent from './forms/login-form.component';

const LoginPageComponent = () => (
  <StyledLoginPageContainer>
    <Typography variant="h4">Login</Typography>
    <LoginFormComponent />
  </StyledLoginPageContainer>
);

export default LoginPageComponent;
