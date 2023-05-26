import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledAuthFormContainer } from '../containers/auth-form.container.styled';
import { registerValues } from './init-values';
import { registerValidation } from './validation/register-form-validation';
import { useAuth } from '../../../utils/useAuth';
import { IRegisterForm } from '../types/auth.types';
import { ROUTER_KEYS } from '../../common/consts/app-keys.const';
import BackButton from '../../common/components/back-button.component';

const RegisterFormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const navigate = useNavigate();

  const { register } = useAuth();

  const onSubmit = async (values: IRegisterForm, actions: FormikHelpers<IRegisterForm>) => {
    actions.setSubmitting(true);
    try {
      const { confirmPassword, ...valuesWithoutConfirm } = values;
      await register(valuesWithoutConfirm);
      actions.resetForm();
      setSubmissionSuccess(true);
      actions.setStatus(null);
      navigate(ROUTER_KEYS.LOGIN);
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
      <Formik
        initialValues={registerValues}
        validationSchema={registerValidation}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="firstName">First name</label>
          <Field id="firstName" name="firstName" />
          <ErrorMessage name="firstName" component="div" />

          <label htmlFor="lastName">Last name</label>
          <Field id="lastName" name="lastName" />
          <ErrorMessage name="lastName" component="div" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <label htmlFor="confirmPassword">Confirm password</label>
          <Field id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />

          {submissionSuccess && <div>Register is successful</div>}
          {submissionError && (
            <div>
              Error ocurred while register! <br /> {submissionError}
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

export default RegisterFormComponent;
