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
        state.unshift(action.payload);
      }
    },

    deliteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deliteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
