import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  console.log(name);
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
