import { useMutation, useQueryClient } from 'react-query';
import { defaultTodoService } from '../modules/todo/services/todo.service';
import { ITodo } from '../modules/todo/types/todo.types';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const updateTodo = async (todoId: string, data: ITodo): Promise<string> => {
    await defaultTodoService.updateTodo(todoId, data);

    return todoId;
  };

  const onSuccess = (todoId: string) => {
    queryClient.invalidateQueries([QUERY_KEYS.TODOS, [QUERY_KEYS.TODOID, todoId]]);
  };

  const mutation = useMutation<string, unknown, { todoId: string; data: ITodo }>(
    (mutationData) => updateTodo(mutationData.todoId, mutationData.data),
    {
      onSuccess
    }
  );

  return { updateTodoMutation: mutation };
};
