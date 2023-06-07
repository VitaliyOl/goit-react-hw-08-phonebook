import * as yup from 'yup';
import 'yup-phone';

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    ),
  phone: yup.string().phone('UA', true),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Please enter email'),
  password: yup
    .string()
    .required('No password provided.')
    .min(3, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    ),
  email: yup.string().email().required('Please enter email'),
  password: yup
    .string()
    .required('No password provided.')
    .min(3, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
