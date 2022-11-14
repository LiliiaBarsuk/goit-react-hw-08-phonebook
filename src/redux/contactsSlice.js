import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
    name: 'state',
    initialState: {
      contacts: {
        items: [],
        isLoading: false,
        error: null
      },
      filter: ""
    },
    reducers: {
      setFilter: (state, action) => {
        state.filterValue = action.payload;
      },
    },
    extraReducers: {
      [fetchContacts.pending](state) {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      },
      [fetchContacts.fulfilled](state, action) {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      },
      [fetchContacts.rejected](state, action) {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      },
      [addContact.pending](state) {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      },
      [addContact.fulfilled](state, action) {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      },
      [addContact.rejected](state, action) {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      },
      [deleteContact.pending](state) {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      },
      [deleteContact.fulfilled](state, action) {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      },
       [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    },
    
  })
        
export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
