import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      // Filter out the contact with the specified id
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Action generators
export const { addContact, deleteContact } = contactSlice.actions;

// Retrieve the reducer
export const contactReducer = contactSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [], // `
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.push({
//         // Змінено ім'я з `addContacts` на `addContact`
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       });
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       ); // Змінено ім'я з `deleteContact` на `deleteContact`
//     },
//   },
// });

// export const { addContact, deleteContact } = contactSlice.actions; // Змінено з `addContacts` на `addContact`
// export const contactReducer = contactSlice.reducer;
