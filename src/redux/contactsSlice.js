import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data,
  },
  // ПИТАННЯ: чому якщо писати  "initialState: data",
  // з persist не працює? (в без persist нормально працює)

  reducers: {
    addContact(state, action) {
      const isExist = state.data.find(
        contact => contact.name === action.payload.name
      );

      if (isExist) {
        alert(`${action.payload.name} ia already in contacts`);
      } else {
        state.data.unshift(action.payload);
      }
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
