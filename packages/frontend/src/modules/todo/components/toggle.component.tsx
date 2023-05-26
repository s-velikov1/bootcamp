import React, { useState, useEffect } from 'react';
import { ToggleStyled } from './toggle.styled';

interface ToggleButtonProps {
  isOn: boolean;
  onToggle: () => void | Promise<void>;
}

export const ToggleButton = ({ isOn, onToggle }: ToggleButtonProps) => {
  const [toggleState, setToggleState] = useState(isOn);

  useEffect(() => {
    setToggleState(isOn);
  }, [isOn]);

  const handleToggle = () => {
    const newState = !toggleState;
    setToggleState(newState);
    onToggle();
  };

  return <ToggleStyled isOn={toggleState} onClick={handleToggle} />;
};
