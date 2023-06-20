import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: data,
  reducers: {
    addContact(state, action) {
      const isExist = state.find(
        contact => contact.name === action.payload.name
      );

      if (isExist) {
        alert(`${action.payload.name} ia already in contacts`);
      } else {
        // setContacts([newContact, ...contacts]);
        state.unshift(action.payload);
      }
      //   state.unshift(action.payload);
      console.log(action.payload);
    },

    deliteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      //   console.log(action.payload);
    },
  },
});

export const { addContact, deliteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
