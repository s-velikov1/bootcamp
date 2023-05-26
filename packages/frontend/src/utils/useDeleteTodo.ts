import { useMutation, useQueryClient } from 'react-query';
import { defaultTodoService } from '../modules/todo/services/todo.service';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const deleteTodo = async (todoId: string) => {
    await defaultTodoService.deleteTodo(todoId);
  };

  const onSuccess = () => {
    queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
  };

  const mutation = useMutation(deleteTodo, {
    onSuccess
  });

  return { deleteTodoMutation: mutation };
};
