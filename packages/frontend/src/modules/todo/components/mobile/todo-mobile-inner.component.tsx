import React from 'react';
import { ITodo } from '../../types/todo.types';
import { StyledMobileContainer } from '../../containers/mobile/mobile.container.styled';
import TodoMobileElement from './todo-mobile-element.component';
import { useGetAllTodos } from '../../../../utils/useTodos';

const TodoMobileInner = () => {
  const { data } = useGetAllTodos();

  return (
    <StyledMobileContainer>
      {data?.data.data.todos.map((todo: ITodo) => (
        <TodoMobileElement key={todo.id} todo={todo} />
      ))}
    </StyledMobileContainer>
  );
};

export default TodoMobileInner;
