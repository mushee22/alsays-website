import * as Yup from 'yup';

export const ApplicationFormSchema = Yup.object().shape({
   first_name: Yup.string()
     .required('First name is required')
     .min(2, 'First name must be at least 2 characters long')
     .max(50, 'First name cannot exceed 50 characters'),
   last_name: Yup.string()
     .required('Last name is required')
     .min(2, 'Last name must be at least 2 characters long')
     .max(50, 'Last name cannot exceed 50 characters'),
   email: Yup.string()
     .required('Email is required')
     .email('Invalid email format'),
 });