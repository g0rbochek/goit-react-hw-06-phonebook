import React from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <>
      <TitlePhonebook title="Phonebook" />
      <ContactForm />
      <TitleContacts title="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
};
