// import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { List } from 'Styles/StyleForm.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactList = ({ removeContact }) => {
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </List>
  );
};

// export const ContactList = ({ contacts, removeContact }) => {
//   return (
//     <List>
//       {contacts.map(contact => (
//         <ContactItem
//           key={contact.id}
//           // contact={contact}
//           removeContact={removeContact}
//         />
//       ))}
//     </List>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   removeContact: PropTypes.func.isRequired,
// };
