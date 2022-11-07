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
      const contactIdx = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(contactIdx, 1);
    },
    }
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
