import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={goBack} variant="outlined">
      Back
    </Button>
  );
};

export default BackButton;
