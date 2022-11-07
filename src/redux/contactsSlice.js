import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  contacts: [],
  filterValue: "",
}

const contactsSlice = createSlice({
    name: 'state',
    initialState: initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(newContact) {
              return {
                payload: {
                    id: nanoid(),
                    name: newContact.name,
                    number: newContact.number,
                },
              };
            },
        },
        
        setFilter: (state, action) => {
          state.filterValue = action.payload;
        },
        
        deleteContact: (state, action) => {
          state.contacts.filter(contact => contact.id !== action.payload);
        },
    }
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
