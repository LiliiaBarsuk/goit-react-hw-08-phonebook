import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
    name: 'state',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filterValue: "",
        selectedContactId: null,
    },
    reducers: {
      setFilter: (state, action) => {
        state.filterValue = action.payload;
      },
      setModal: state => {
        state.isModalOpen = !state.isModalOpen;
      },
    },
    extraReducers: {
      [fetchContacts.pending](state) {
        state.isLoading = true;
        state.error = null;
      },
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      [fetchContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      [addContact.pending](state) {
        state.isLoading = true;
        state.error = null;
      },
      [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      },
      [addContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      [deleteContact.pending](state) {
        state.isLoading = true;
        state.error = null;
      },
      [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      },
       [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    },
    
  })
        
export const { setFilter, setModal } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
