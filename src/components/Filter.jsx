import { Formik } from 'formik';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Label, Field } from '../Styles/StyleForm.styled';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  // console.log(filterValue);

  const changeFilter = evt => dispatch(filterContact(evt.currentTarget.value));

  return (
    <Formik>
      <Label>
        Find contact by name
        <Field type="text" onChange={changeFilter} value={filterValue} />
      </Label>
    </Formik>
  );
};

// export const Filter = ({ value, onChange }) => {
//   return (
//     <Formik>
//       <Label>
//         Find contact by name
//         <Field type="text" value={value} onChange={onChange} />
//       </Label>
//     </Formik>
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
