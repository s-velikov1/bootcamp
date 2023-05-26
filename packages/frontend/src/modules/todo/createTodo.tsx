import React from 'react';
import { DefaultPageContainer } from '../default/defaultPageContainer.styled';
import BackButton from '../common/components/back-button.component';
import CreateTodoForm from './forms/create-todo-form.component';

const CreateTodoPageContainer = () => (
  <DefaultPageContainer>
    <CreateTodoForm />
    <BackButton />
  </DefaultPageContainer>
);

export default CreateTodoPageContainer;
