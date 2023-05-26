import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { FormContainer } from './form.container.styled';
import { createTodoValidation } from './validation/todo-validation';
import { ITodoForm } from '../types/todo.types';
import { createTodoValues } from './init-values';
import { useCreateTodo } from '../../../utils/useCreateTodo';

const CreateTodoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const { createTodoMutation } = useCreateTodo();

  const onSubmit = async (values: ITodoForm, actions: FormikHelpers<ITodoForm>) => {
    actions.setSubmitting(true);
    try {
      await createTodoMutation.mutate(values);
      actions.resetForm();
      setSubmissionSuccess(true);
      actions.setStatus(null);
    } catch (error) {
      if (error instanceof Error) {
        setSubmissionError(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={createTodoValues}
      validationSchema={createTodoValidation}
      onSubmit={onSubmit}
    >
      <FormContainer>
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Type title" />
          <ErrorMessage name="title" component="div" />

          <label htmlFor="description">Description</label>
          <Field id="description" name="description" as="textarea" />
          <ErrorMessage name="description" component="div" />

          <label htmlFor="isCompleted">Completed</label>
          <Field id="isCompleted" name="isCompleted" type="checkbox" />

          <label htmlFor="isPrivate">Private</label>
          <Field id="isPrivate" name="isPrivate" type="checkbox" />

          {submissionSuccess && <div>Todo created successfully</div>}
          {submissionError && (
            <div>
              Error ocurred while creating todo! <br /> {submissionError}
            </div>
          )}

          <button type="submit">{isSubmitting ? 'Creating...' : 'Create'}</button>
        </Form>
      </FormContainer>
    </Formik>
  );
};

export default CreateTodoForm;
