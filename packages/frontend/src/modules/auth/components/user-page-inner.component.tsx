import React from 'react';
import { useQuery } from 'react-query';
import { Button } from '@mui/material';
import { defaultAuthService } from '../services/auth.service';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { useAuth } from '../../../utils/useAuth';
import BackButton from '../../common/components/back-button.component';

const UserPageInner = () => {
  const { logout } = useAuth();
  const fetchUser = async () => {
    const res = await defaultAuthService.getCurrentUser();

    return res;
  };

  const { data } = useQuery(QUERY_KEYS.CURRENT_USER, fetchUser);

  console.log(data?.data.data.user);

  return (
    <>
      <div>First name: {data?.data.data.user.firstName}</div>
      <div>Last name: {data?.data.data.user.lastName}</div>
      <div>Email: {data?.data.data.user.email}</div>

      <BackButton />
      <Button variant="outlined" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default UserPageInner;
