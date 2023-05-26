import * as Yup from 'yup';

export const registerValidation = Yup.object().shape({
  firstName: Yup.string().required('First name is require'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(5, 'Password must be at least 5 characters'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
});
