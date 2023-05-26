import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { StyledViewButton } from '../view-todo.styled';
import DeleteTodo from '../deleteTodo.component';
import { CompleteToggle } from '../complete-toggle.component';
import { TodoProps } from '../../types/todo.types';

const TodoMobileElement = ({ todo }: TodoProps) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(ROUTER_KEYS.TODO, { state: { todoId: todo.id } });
  };

  return (
    <div className="todo-item-mobile">
      <h2 className="title">{todo.title}</h2>
      <div className="description">{todo.description}</div>
      <div className="mobile-actions">
        <div className="mobile-actions-buttons">
          <StyledViewButton className="view-button" onClick={handleViewClick}>
            View
          </StyledViewButton>
          <DeleteTodo todoId={todo.id} />
        </div>
        <CompleteToggle todo={todo} />
      </div>
    </div>
  );
};

export default TodoMobileElement;
