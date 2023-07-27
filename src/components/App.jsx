import {  useSelector } from 'react-redux';
import HeroSection from './HeroSection/HeroSection';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  
  const contacts = useSelector(state => state.contacts);
  const filtered = useSelector(state => state.filtered);



  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filtered?.toLowerCase() || '') ||
      contact.number.includes(filtered || '')
  );

  return (
    <div className={css.phonebook}>
      <HeroSection herotitle="Phonebook">
        <ContactForm />
      </HeroSection>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter filter={filtered}  />
            <ContactsList contacts={filteredContacts} />
          </>
        ) : (
          <p className={css.noCont}>No saved contacts!</p>
        )}
      </Section>
    </div>
  );
};

export default App;
