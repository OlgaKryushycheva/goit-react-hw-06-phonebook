import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Container, Title, TitleContact } from 'Styles/StyleForm.styled';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <TitleContact>Contacts</TitleContact>
      <ContactList />
    </Container>
  );
}
