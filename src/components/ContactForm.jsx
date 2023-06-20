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
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

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

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        const contact = {
          ...values,
          id: nanoid(),
        };

        dispatch(addContact(contact));
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
