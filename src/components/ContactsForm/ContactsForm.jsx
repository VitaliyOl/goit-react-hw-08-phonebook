import { Formik, Field } from 'formik';
import TextField from '@mui/material/TextField';
import { Container, Forms, FormButton, Error } from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { schema } from 'components/schema/schema';

const initialValues = { name: '', phone: '' };

export const ContactsForm = () => {
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handleAddContact = ({ name, phone }) => {
    contacts.items.filter(contact => contact.name === name).length
      ? alert(` is already in contact`)
      : dispatch(addContact({ name, phone }));
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
          <Field as={TextField} label="Name" type="text" name="name" />
          <Error name="name" component="span" />

          <Field as={TextField} label="Phone" type="tel" name="phone" />
          <Error name="phone" component="span" />

          <FormButton type="submit">Add contact</FormButton>
        </Forms>
      </Formik>
    </Container>
  );
};