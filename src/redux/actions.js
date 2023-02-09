import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'myReducer/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'myReducer/deleteContact',
    payload: id,
  };
};

export const findContact = name => {
  return {
    type: 'myReducer/findContact',
    payload: name,
  };
};
