import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledViewButton } from '../view-todo.styled';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import DeleteTodo from '../deleteTodo.component';
import { CompleteToggle } from '../complete-toggle.component';
import { TodoProps } from '../../types/todo.types';

const TodoTabletElement = ({ todo }: TodoProps) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(ROUTER_KEYS.TODO, { state: { todoId: todo.id } });
  };

  return (
    <>
      <h2 className="slide-title">{todo.title}</h2>
      <div className="slide-description">{todo.description}</div>
      <div className="slide-actions">
        <div className="slide-actions-buttons">
          <StyledViewButton className="view-button" onClick={handleViewClick}>
            View
          </StyledViewButton>
          <DeleteTodo todoId={todo.id} />
        </div>
        <CompleteToggle todo={todo} />
      </div>
    </>
  );
};

export default TodoTabletElement;
