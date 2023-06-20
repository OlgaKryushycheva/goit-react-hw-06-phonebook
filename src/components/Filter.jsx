import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { Label, Field } from '../Styles/StyleForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt => dispatch(filterContact(evt.currentTarget.value));

  return (
    <Formik>
      <Label>
        Find contact by name
        <Field name="filter" type="text" onChange={changeFilter} />
      </Label>
    </Formik>
  );
};
