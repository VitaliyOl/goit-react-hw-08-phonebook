import { useSelector } from 'react-redux';
import { getContact, getFilter } from 'redux/contact/selectors';
import { ContactListItem } from './ContactListItem';
import { Fragment } from 'react';







export default function ContactsList() { 
  
  const contacts = useSelector(getContact);


  const filter = useSelector(getFilter); 


  const filterContact = contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });
  
 
  return (
    <>
    <ul>
      {filterContact.map(({ id, name, number }) =>  {
        return <Fragment key={id}>
                <ContactListItem name={name} phone={number} id={id} />
              </Fragment>
      }      
       )}
    </ul>
    </>
  );
}
