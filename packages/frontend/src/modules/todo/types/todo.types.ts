import { PropsWithChildren } from 'react';

export interface ITodo {
  id: string;
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
}

export interface ITodoForm {
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
}

export type TodoProps = PropsWithChildren<{
  todo: ITodo;
}>;
