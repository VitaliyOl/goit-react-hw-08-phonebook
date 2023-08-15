import { Button, TextField } from '@mui/material';
import { Forms } from 'components/ContactsForm/ContactsForm.styled';
import { loginSchema } from 'components/schema/schema';
import { ErrorMessage, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Container } from './LoginForm.styled';
import { useTranslation } from 'react-i18next';

const initialValues = {
  email: '',
  password: '',
};

export function LoginForm() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login({ email: values.email, password: values.password }));
    resetForm();
  };
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Forms>
          <Field as={TextField} label={t('Email')} type="email" name="email" />
          <ErrorMessage name="email" component="span" />
          <Field
            as={TextField}
            label={t('Password')}
            type="password"
            name="password"
          />
          <ErrorMessage name="password" component="span" />
          <Button variant="outlined" type="submit">
            {t('Login')}
          </Button>
        </Forms>
      </Formik>
    </Container>
  );
}
