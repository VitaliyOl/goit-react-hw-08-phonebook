import { Button, TextField } from '@mui/material';
import { Forms } from 'components/ContactsForm/ContactsForm.styled';
import { loginSchema } from 'components/schema/schema';
import { ErrorMessage, Field, Formik } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

function Login() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
          <Field as={TextField} label="Password" type="text" name="Password" />
          <ErrorMessage name="Password" component="span" />
          <Button variant="outlined">Login</Button>
        </Forms>
      </Formik>
    </div>
  );
}

export default Login;
