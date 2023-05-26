import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { CompleteToggle } from './components/complete-toggle.component';
import { PrivateToggle } from './components/private-toggle.component';
import BackButton from '../common/components/back-button.component';
import { StyledCreatePageContainer } from './containers/todo-create-page.container.styled';
import UpdateTodoForm from './forms/update-todo-form.component';
import EditButton from './components/edit-button-component';
import { useTodoById } from '../../utils/useTodoById';
import { useInvalidate } from '../../utils/useInvalidate';

const TodoPageContainer = () => {
  const location = useLocation();
  const { todoId } = location.state;
  const [isEdit, setIsEdit] = useState(false);
  const { data, isLoading } = useTodoById(todoId);
  const invalidateQueries = useInvalidate([QUERY_KEYS.TODOS, [QUERY_KEYS.TODOID, todoId]]);

  useEffect(() => {
    invalidateQueries();
  }, [invalidateQueries, todoId, isEdit]);

  if (!data) {
    return <Typography variant="h3">No data available</Typography>;
  }

  return (
    <StyledCreatePageContainer>
      {isLoading && <p>Loading..</p>}
      {!isLoading && !isEdit ? (
        <div className="inner">
          <Typography variant="h3" className="title">
            {data.data.data.todo.title}
          </Typography>
          <div>Description:</div>
          <div className="description">{data.data.data.todo.description}</div>
          <div className="state">
            <span>Complete:</span> <CompleteToggle todo={data.data.data.todo} />
          </div>
          <div className="state">
            Private: <PrivateToggle todo={data.data.data.todo} />
          </div>
        </div>
      ) : (
        <UpdateTodoForm setter={setIsEdit} todo={data.data.data.todo} />
      )}
      <div className="actions">
        <BackButton />
        <EditButton className="edit-button" onClick={() => setIsEdit(!isEdit)} />
      </div>
    </StyledCreatePageContainer>
  );
};

export default TodoPageContainer;
