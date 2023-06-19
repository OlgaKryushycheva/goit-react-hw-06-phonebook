import { createStore } from 'redux';

const reduser = state => state;

export const store = createStore(reduser);
