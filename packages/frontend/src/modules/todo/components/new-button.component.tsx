import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../../common/consts/app-keys.const';

const StyledNewTodoButton = styled.button`
  width: 5rem;
  margin: 50px;
`;

const NewButton = () => {
  const navigate = useNavigate();
  const goToNewTodoPage = () => {
    navigate(ROUTER_KEYS.CREATE_TODO);
  };

  return <StyledNewTodoButton onClick={goToNewTodoPage}>New todo</StyledNewTodoButton>;
};

export default NewButton;
