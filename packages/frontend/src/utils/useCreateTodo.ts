import { useMutation, useQueryClient } from 'react-query';
import { ITodoForm } from '../modules/todo/types/todo.types';
import { defaultTodoService } from '../modules/todo/services/todo.service';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const createTodo = async (data: ITodoForm) => {
    await defaultTodoService.createTodo(data);
  };

  const onSuccess = () => {
    queryClient.invalidateQueries(QUERY_KEYS.TODOS);
  };

  const mutation = useMutation(createTodo, {
    onSuccess
  });

  return { createTodoMutation: mutation };
};
