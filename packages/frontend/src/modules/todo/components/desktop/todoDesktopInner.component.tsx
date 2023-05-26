import React from 'react';
import { StyledDesktopContainer } from '../../containers/desktop/todo-desktop.container.styled';
import TodoElement from './todo-desktop-element.component';
import { ITodo } from '../../types/todo.types';
import { useGetAllTodos } from '../../../../utils/useTodos';

export default function TodoDesktopInner() {
  const { data } = useGetAllTodos();

  return (
    <StyledDesktopContainer>
      <thead>
        <tr>
          <th>Todo Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.data.data.todos?.map((todo: ITodo) => (
          <TodoElement key={todo.id} todo={todo} />
        ))}
      </tbody>
    </StyledDesktopContainer>
  );
}
