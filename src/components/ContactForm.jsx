import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  Label,
  Form,
  ErrorMessage,
  Field,
  Btn,
} from '../Styles/StyleForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const phoneRegExp = /[+3][0-9]{12}$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Слишком короткое!')
    .max(20, 'Слишком длинное!')
    .required('Заполните это поле'),
  number: Yup.string()
    .matches(phoneRegExp, 'Заполните поле в формате +380000000000')
    .required('Заполните это поле'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          ...values,
          id: nanoid(),
        };

        const isExist = contacts.find(contact => contact.name === values.name);
        if (isExist) {
          alert(`${values.name} ia already in contacts`);
        } else {
          dispatch(addContact(newContact));
        }

        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component={'span'} />
        </Label>

        <Label>
          Number
          <Field name="number" type="tel" />
          <ErrorMessage name="number" component={'span'} />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </Form>
    </Formik>
  );
};
