import { useQuery } from 'react-query';
import { defaultTodoService } from '../modules/todo/services/todo.service';
import { QUERY_KEYS } from '../modules/common/consts/app-keys.const';

export const useGetAllTodos = () => {
  const fetchAllTodos = async () => defaultTodoService.getAllTodos();

  return useQuery(QUERY_KEYS.TODOS, fetchAllTodos);
};
