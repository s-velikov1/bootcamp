import React from 'react';
import { Typography } from '@mui/material';
import TopNavigationComponent from '../common/components/top-navigation-bar.component';
import TodoMainContainer from './containers/todo-main.container';
import { DefaultPageContainer } from '../default/defaultPageContainer.styled';
import { useGetAllTodos } from '../../utils/useTodos';

const HomePageContainer = () => {
  const { isLoading, error } = useGetAllTodos();

  if (isLoading) {
    return <Typography variant="h3">Is loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h3">Error, can not fetch todos</Typography>;
  }

  return (
    <DefaultPageContainer>
      <TopNavigationComponent />
      <TodoMainContainer />
    </DefaultPageContainer>
  );
};

export default HomePageContainer;
