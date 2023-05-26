import { useEffect } from 'react';
import { useQueryClient, QueryKey } from 'react-query';

export const useInvalidate = (keys: QueryKey | QueryKey[]) => {
  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries(keys);
  };

  useEffect(() => {
    invalidateQueries();
  }, [keys]);

  return invalidateQueries;
};
