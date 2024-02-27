import { deleteContact } from 'components/redux/contactSlice';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { cntc, fltr } from 'components/redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(cntc);
  const filterContacts = useSelector(fltr);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
      {filteredContacts.length === 0 && <li>No contacts found</li>}
    </List>
  );
};
