import * as Yup from 'yup';

export const createTodoValidation = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required')
});
