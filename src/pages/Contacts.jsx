import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contact/operations';
import { getContact } from 'redux/contact/selectors';

function Contacts() {
  const { isLoading, error } = useSelector(getContact);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  
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
