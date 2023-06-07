import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Formik } from 'formik';
import { registerSchema } from 'components/schema/schema';
import { Forms } from 'components/ContactsForm/ContactsForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function Register() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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

          <Button variant="outlined">Register</Button>
        </Forms>
      </Formik>
    </div>
  );
}

export default Register;
