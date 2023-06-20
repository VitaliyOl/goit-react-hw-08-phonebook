import { ListButton, ListItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, getFilter } from 'redux/contact/selectors';
import { changeContact, deleteContact } from 'redux/contact/operations';
import { useState } from 'react';



export default function ContactsList() {

  const [edit, setEdit] = useState(false)
  
  const contacts = useSelector(getContact);


  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filterContact = contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });


  const handleUpdate = () => {
    setEdit(prevState => !prevState);
    if (edit) {
        const contact = {
          // id,
          // nativeWord: editNativeWord,
          // foreignWord: editforeignWord,
        };
        dispatch(changeContact(contact));
    }
  }
 
  return (
    <ul>
      {filterContact.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span>
              {name}: {number}
            </span>
            <ListButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </ListButton>
            <ListButton onClick={() =>handleUpdate}>
              Edit
            </ListButton>
          </ListItem>
        );
      })}
    </ul>
  );
}
