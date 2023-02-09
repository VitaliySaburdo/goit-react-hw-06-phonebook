import { createReducer, createAction } from '@reduxjs/toolkit';

const addContact = createAction('myReducer/addContact');
const deleteContact = createAction('myReducer/deleteContact');
const findContact = createAction('myReducer/findContact');

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = '';

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const filterReducer = createReducer(initialState, {
  [findContact]: (state, action) => (state = action.payload),
});
