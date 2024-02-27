import React, { useState } from 'react';
import { Form } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactSlice';
import { cntc } from 'components/redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(cntc);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const submitForm = e => {
    e.preventDefault();
    setName('');
    setNumber('');
    if (
      contacts.find(
        ({ name: contactName }) =>
          contactName.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  return (
    <Form onSubmit={submitForm}>
      <label htmlFor={inputNameId}>Name</label>
      <input
        type="text"
        id={inputNameId}
        name="name"
        placeholder="Enter name ..."
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor={inputNumberId}>Number</label>
      <input
        type="tel"
        name="number"
        id={inputNumberId}
        placeholder="tel: xxx-xx-xx"
        onChange={handleChange}
        value={number}
        required
      />
      <button type="submit">Add contact</button>
    </Form>
  );
};
