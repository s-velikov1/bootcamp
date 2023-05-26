import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTER_KEYS } from '../consts/app-keys.const';

const TopNavigationComponent = () => {
  const navigate = useNavigate();
  const handleMyProfiel = () => {
    navigate(ROUTER_KEYS.USER);
  };

  return (
    <div className="top-navigation">
      <Button className="my-profile-nav" variant="contained" onClick={handleMyProfiel}>
        My Profile
      </Button>
    </div>
  );
};

export default TopNavigationComponent;
