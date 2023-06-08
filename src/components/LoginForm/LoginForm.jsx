import { Button, TextField } from '@mui/material';
import { Forms } from 'components/ContactsForm/ContactsForm.styled';
import { loginSchema } from 'components/schema/schema';
import { ErrorMessage, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login({ email: values.email, password: values.password }));
    resetForm();
  };
  return (
    <div style={{ display: 'flex', width: '540px' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Forms>
          <Field as={TextField} label="Email" type="email" name="email" />
          <ErrorMessage name="email" component="span" />
          <Field as={TextField} label="Password" type="text" name="password" />
          <ErrorMessage name="password" component="span" />
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </Forms>
      </Formik>
    </div>
  );
}