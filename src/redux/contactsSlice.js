import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
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
        deleteContact(state, action) {
                return state.filter(contact => contact.id !== action.payload)
        }
    }
});

const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
      setFilter(state, action) {
        return state = action.payload;
      },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;