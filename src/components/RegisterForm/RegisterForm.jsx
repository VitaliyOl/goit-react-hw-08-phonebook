import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Formik } from 'formik';
import { registerSchema } from 'components/schema/schema';
import { Forms } from 'components/ContactsForm/ContactsForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <div style={{ display: 'flex', width: '540px' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Forms>
          <Field as={TextField} label="Name" type="text" name="name" />
          <ErrorMessage name="name" component="span" />
          <Field as={TextField} label="Email" type="email" name="email" />
          <ErrorMessage name="email" component="span" />
          <Field as={TextField} label="Password" type="text" name="password" />
          <ErrorMessage name="password" component="span" />

          <Button variant="outlined" type="submit">
            Register
          </Button>
        </Forms>
      </Formik>
    </div>
  );
}
