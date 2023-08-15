import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contact/operations';
import { getContact } from 'redux/contact/selectors';
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { isLoading, error } = useSelector(getContact);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
      <h1>{t('Phonebook')}</h1>
      <ContactsForm />
      <h2>{t('Contacts')}</h2>
      <Filter />
      {isLoading && (
        <div style={{ margin: '20px' }}>
          <b>Loading...</b>
        </div>
      )}
      {error && <b>{error}</b>}
      <ContactsList />
    </div>
  );
}

export default Contacts;
