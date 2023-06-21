import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data,
  },

  reducers: {
    addContact(state, action) {
      state.data.unshift(action.payload);
    },

    deliteContact(state, action) {
      const index = state.data.findIndex(
        contact => contact.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});

export const { addContact, deliteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
