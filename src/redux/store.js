import { configureStore } from '@reduxjs/toolkit';
import { createReducer, createAction } from '@reduxjs/toolkit';

const addContact = createAction('myReducer/addContact');
const removeContact = createAction('myReducer/removeContact');

console.log(addContact(100));

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const myReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => state + action.payload,
  [removeContact]: (state, action) => state + action.payload,
});

export const store = configureStore({
  reducer: {
    contacts: myReducer,
  },
});
