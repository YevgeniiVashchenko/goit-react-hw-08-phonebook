import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';
import { ContactListElem } from '../ContactListElem/ContactListElem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFiltredContacts);

  const makeList = arrey => {
    return arrey.map(contact => {
      return <ContactListElem key={contact.id} contact={contact} />;
    });
  };

  return <List>{makeList(contacts)}</List>;
};
