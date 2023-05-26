import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledAuthFormContainer } from '../containers/auth-form.container.styled';
import { loginValues } from './init-values';
import { loginValidation } from './validation/login-form-validation';
import { ILoginForm } from '../types/auth.types';
import { useAuth } from '../../../utils/useAuth';
import { ROUTER_KEYS } from '../../common/consts/app-keys.const';
import BackButton from '../../common/components/back-button.component';

const LoginFormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuth();

  const onSubmit = async (values: ILoginForm, actions: FormikHelpers<ILoginForm>) => {
    actions.setSubmitting(true);
    try {
      await login(values);
      // await createTodoMutation.mutate(values);
      // console.log(values);
      actions.resetForm();
      setSubmissionSuccess(true);
      actions.setStatus(null);
      navigate(ROUTER_KEYS.ROOT);
    } catch (error) {
      if (error instanceof Error) {
        setSubmissionError(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledAuthFormContainer>
      <Formik initialValues={loginValues} validationSchema={loginValidation} onSubmit={onSubmit}>
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" />
          <ErrorMessage name="password" component="div" />

          {submissionSuccess && <div>Login is successful</div>}
          {submissionError && (
            <div>
              Error ocurred while login! <br /> {submissionError}
            </div>
          )}

          <div className="actions">
            <BackButton />
            <Button variant="contained" type="submit">
              {isSubmitting ? 'Submitting' : 'Submit'}
            </Button>
          </div>
        </Form>
      </Formik>
    </StyledAuthFormContainer>
  );
};

export default LoginFormComponent;
