import React from 'react';
import { StyledEditButton } from './edit-button.styled';

type EditButtonProps = {
  onClick: () => void;
  className?: string;
};

const EditButton = ({ onClick, className }: EditButtonProps) => (
  <StyledEditButton className={className} onClick={onClick}>
    EDIT
  </StyledEditButton>
);

export default EditButton;
