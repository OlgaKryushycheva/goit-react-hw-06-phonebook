// import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { List } from 'Styles/StyleForm.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const filter = useSelector(getFilter);
  // console.log(filter);

  const filterContact = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <List>
      {filterContact.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          // removeContact={removeContact}
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
