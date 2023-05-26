import React from 'react';
import { Typography } from '@mui/material';
import { StyledLoginPageContainer } from './containers/login-page.container.styled';
import RegisterFormComponent from './forms/register-form.component';

const RegisterPageComponent = () => (
  <StyledLoginPageContainer>
    <Typography variant="h4">Register</Typography>
    <RegisterFormComponent />
  </StyledLoginPageContainer>
);

export default RegisterPageComponent;
