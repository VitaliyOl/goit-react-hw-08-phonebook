import { ListButton, ListItem } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { changeContact, deleteContact } from 'redux/contact/operations';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactListItem = ({ name, phone: number, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [changeName, setChangeName] = useState(name);
  const [changeNumber, setChangeNumber] = useState(number);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setChangeName(value);
        break;
      case 'number':
        setChangeNumber(value);
        break;
      default:
        break;
    }
  };

  const handleUpdate = () => {
    setIsEdit(prevState => !prevState);
    if (isEdit) {
      const contact = {
        id,
        name: changeName,
        number: changeNumber,
      };
      console.log(contact);
      dispatch(changeContact(contact));
    }
  };

  return (
    <ListItem>
      {isEdit ? (
        <>
          <TextField
            label="name"
            variant="outlined"
            type="text"
            value={changeName}
            name="name"
            onChange={handleChange}
            sx={{}}
          />
          <TextField
            label="number"
            variant="outlined"
            type="text"
            value={changeNumber}
            name="number"
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <span>
            {name}: {number}
          </span>
        </>
      )}

      {!isEdit && (
        <ListButton onClick={() => dispatch(deleteContact(id))}>
          {t('Delete')}
        </ListButton>
      )}

      <ListButton onClick={handleUpdate}>
        {isEdit ? t('Ok') : t('Edit')}
      </ListButton>
    </ListItem>
  );
};
