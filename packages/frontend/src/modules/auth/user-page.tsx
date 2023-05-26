import React from 'react';
import { Typography } from '@mui/material';
import { StyledLoginPageContainer } from './containers/login-page.container.styled';
import UserPageInner from './components/user-page-inner.component';

const UserPageComponent = () => (
  <StyledLoginPageContainer>
    <Typography variant="h4">Personal info</Typography>
    <UserPageInner />
  </StyledLoginPageContainer>
);

export default UserPageComponent;
