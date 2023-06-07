import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';

function Contacts() {
  const { isLoading, error } = useSelector(getContact);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <div style={{ margin: '20px' }}>
          <b>Loading...</b>
        </div>
      )}
      {error && <b>{error}</b>}
      <ContactsList />
    </>
  );
}

export default Contacts;
