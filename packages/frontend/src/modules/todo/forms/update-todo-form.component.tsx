import React, { useState, Dispatch, SetStateAction } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers, useFormik, FormikConfig } from 'formik';
import { FormContainer } from './form.container.styled';
import { defaultTodoService } from '../services/todo.service';
import { ITodo, TodoProps } from '../types/todo.types';
import { createTodoValidation } from './validation/todo-validation';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { useInvalidate } from '../../../utils/useInvalidate';

interface PropsWithSetter extends TodoProps {
  setter?: Dispatch<SetStateAction<boolean>>;
}

const UpdateTodoForm = ({ todo, setter }: PropsWithSetter) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const invalidateQueries = useInvalidate([QUERY_KEYS.TODOS, [QUERY_KEYS.TODOID, todo.id]]);

  const config: FormikConfig<ITodo> = {
    initialValues: todo,
    onSubmit: () => {}
  };

  const formik = useFormik<ITodo>(config);
  const onSubmit = async (values: ITodo, actions: FormikHelpers<ITodo>) => {
    actions.setSubmitting(true);
    try {
      await defaultTodoService.updateTodo(todo.id, formik.values);
      actions.resetForm();
      setSubmissionSuccess(true);
      actions.setStatus(null);
      invalidateQueries();

      if (setter) {
        setter(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        setSubmissionError(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik initialValues={todo} validationSchema={createTodoValidation} onSubmit={onSubmit}>
      <FormContainer>
        <Form>
          <label htmlFor="title">Title</label>
          <Field
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <ErrorMessage name="title" component="div" />

          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            as="textarea"
          />
          <ErrorMessage name="description" component="div" />

          <label htmlFor="isCompleted">Completed</label>
          <Field
            id="isCompleted"
            name="isCompleted"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.isCompleted}
          />

          <label htmlFor="isPrivate">Private</label>
          <Field
            id="isPrivate"
            name="isPrivate"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.isPrivate}
          />

          {submissionSuccess && <div>Todo updated successfully</div>}
          {submissionError && (
            <div>
              Error ocurred while creating todo! <br /> {submissionError}
            </div>
          )}

          <button type="submit">{isSubmitting ? 'Updating...' : 'Update'}</button>
        </Form>
      </FormContainer>
    </Formik>
  );
};

export default UpdateTodoForm;
