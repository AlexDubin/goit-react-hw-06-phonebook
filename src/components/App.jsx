import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter as setFilterAction } from '../redux/filterSlice';
import HeroSection from './HeroSection/HeroSection';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filtered = useSelector(state => state.filtered);

  const handleFilterChange = filter => {
    dispatch(setFilterAction(filter));
  };

  const handleAddContact = newContact => {
    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (existingContact) {
      alert(`${newContact.name} уже есть в контактах.`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filtered?.toLowerCase() || '') ||
      contact.number.includes(filtered || '')
  );

  return (
    <div className={css.phonebook}>
      <HeroSection herotitle="Phonebook">
        <ContactForm handleAddContact={handleAddContact} />
      </HeroSection>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter filter={filtered} handleFilterChange={handleFilterChange} />
            <ContactsList
              contacts={filteredContacts}
              handleDeleteContact={handleDeleteContact}
            />
          </>
        ) : (
          <p className={css.noCont}>No saved contacts!</p>
        )}
      </Section>
    </div>
  );
};

export default App;
