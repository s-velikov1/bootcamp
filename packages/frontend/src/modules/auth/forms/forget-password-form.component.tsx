import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { Button } from '@mui/material';
import { StyledAuthFormContainer } from '../containers/auth-form.container.styled';
import { forgetPasswordValues } from './init-values';
import { forgetPasswordValidation } from './validation/forget-password-validation';
import { useAuth } from '../../../utils/useAuth';
import { IForgetPassword } from '../types/auth.types';
import BackButton from '../../common/components/back-button.component';

const ForgetPasswordFormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const { resetPassword } = useAuth();

  const onSubmit = async (values: IForgetPassword, actions: FormikHelpers<IForgetPassword>) => {
    actions.setSubmitting(true);
    try {
      await resetPassword(values);
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
    <StyledAuthFormContainer>
      <Formik
        initialValues={forgetPasswordValues}
        validationSchema={forgetPasswordValidation}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" />
          <ErrorMessage name="email" component="div" />

          {submissionSuccess && <div>Password reset link sent to your email address</div>}
          {submissionError && (
            <div>
              Error ocurred while reset password! <br /> {submissionError}
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

export default ForgetPasswordFormComponent;
