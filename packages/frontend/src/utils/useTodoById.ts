import { useQuery } from 'react-query';
import { defaultTodoService } from '../modules/todo/services/todo.service';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';

export const useTodoById = (todoId: string) => {
  const fetchTodoById = async () => defaultTodoService.getById(todoId);

  return useQuery([QUERY_KEYS.TODOID, todoId], fetchTodoById);
};
