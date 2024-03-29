import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Formik } from 'formik';
import { registerSchema } from 'components/schema/schema';
import { Forms } from 'components/ContactsForm/ContactsForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export function RegisterForm() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
    <div style={{ width: '540px' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Forms>
          <Field as={TextField} label={t('Name')} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
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
            {t('Register')}
          </Button>
        </Forms>
      </Formik>
    </div>
  );
}
