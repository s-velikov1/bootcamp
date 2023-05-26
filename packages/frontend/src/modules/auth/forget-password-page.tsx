import React from 'react';
import { Typography } from '@mui/material';
import { StyledLoginPageContainer } from './containers/login-page.container.styled';
import ForgetPasswordFormComponent from './forms/forget-password-form.component';

const ForgetPasswordPageComponent = () => (
  <StyledLoginPageContainer>
    <Typography variant="h4">Forget password</Typography>
    <ForgetPasswordFormComponent />
  </StyledLoginPageContainer>
);

export default ForgetPasswordPageComponent;
