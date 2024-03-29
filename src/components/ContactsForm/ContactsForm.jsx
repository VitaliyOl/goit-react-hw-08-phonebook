import { Formik, Field } from 'formik';
import TextField from '@mui/material/TextField';
import { Container, Forms, FormButton, Error } from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/contact/selectors';
import { addContact } from 'redux/contact/operations';
import { schema } from 'components/schema/schema';
import { useTranslation } from 'react-i18next';

const initialValues = { name: '', number: '' };

export const ContactsForm = () => {
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleAddContact = ({ name, number }) => {
    contacts.items.filter(contact => contact.name === name).length
      ? alert(` is already in contact`)
      : dispatch(addContact({ name, number }));
  };

  const handleSubmit = (values, { resetForm }) => {
    handleAddContact(values);
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forms>
          <Field as={TextField} label={t('Name')} type="text" name="name" />
          <Error name="name" component="span" />

          <Field as={TextField} label={t('Number')} type="tel" name="number" />
          <Error name="number" component="span" />

          <FormButton type="submit">{t('Add contact')}</FormButton>
        </Forms>
      </Formik>
    </Container>
  );
};
