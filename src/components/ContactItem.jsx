import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deliteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { Btn, Item } from 'Styles/StyleForm.styled';

export const ContactItem = ({ contact: { name, number, id } }) => {
  // const contactsR = useSelector(state => state.contacts);
  // const { name, number, id } = contactsR;
  // console.log(contactsR);
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <Btn type="button" onClick={() => dispatch(deliteContact(id))}>
        Delite
      </Btn>
    </Item>
  );
};

// export const ContactItem = ({
//   removeContact,
//   contact: { name, number, id },
// }) => {
//   return (
//     <Item>
//       {name}: {number}
//       <Btn type="button" onClick={() => removeContact(id)}>
//         Delite
//       </Btn>
//     </Item>
//   );
// };

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  // removeContact: PropTypes.func.isRequired,
};
