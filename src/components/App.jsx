import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { RenderContacts } from './RenderContactsList/RenderContactsList';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';
import { Container } from './App.styled';

export function App() {
  const [filter, setFilter] = useState('');

  // const formSubmitHendler = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(5),
  //     name,
  //     number,
  //   };

    // const isNameInContact = contacts.find(
    //   contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    // );

  //   if (isNameInContact) {
  //     return alert(`${name} is already in contacts`);
  //   }
  //   setContacts([contact, ...contacts]);
  // };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Container>
      <Section title="Phonebook" />
      <ContactForm  />
      <Section title="Contacts" />
      <Filter value={filter} onChange={changeFilter} />
      <RenderContacts />
    </Container>
  );
}

App.prototype = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onSubmit: PropTypes.func,
};
