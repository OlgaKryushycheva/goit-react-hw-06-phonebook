import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deliteContact } from 'redux/contactsSlice';

import { Btn, Item } from 'Styles/StyleForm.styled';

export const ContactItem = ({ contact: { name, number, id } }) => {
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

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
