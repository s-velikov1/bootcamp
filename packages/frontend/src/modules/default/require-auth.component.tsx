import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useAuth } from '../../utils/useAuth';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';

const RequireAuth = ({ children }: any) => {
  const { checkAuth } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchState = async () => {
      const authenticated = await checkAuth();
      console.log(authenticated);
      setIsAuthenticated(authenticated);
    };

    fetchState();
  }, []);

  if (isAuthenticated === null) {
    return <Typography variant="h3">Loading...</Typography>;
  }

  if (!isAuthenticated) {
    console.log('not');
    return <Navigate replace to={ROUTER_KEYS.AUTH} />;
  }
  return children;
};

export default RequireAuth;
