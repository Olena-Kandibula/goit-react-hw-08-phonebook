import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactView = () => {
  return (
    <div>
      <Container>
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};

export default ContactView;
