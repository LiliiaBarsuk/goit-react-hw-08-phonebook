import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://636f6bd5bb9cf402c8174aa3.mockapi.io/';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", 
async (_, thunkAPI) => {
  try {
    const contacts = await axios.get('/contacts');
    return contacts.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { 
          name: contact.name,
          phone: contact.number 
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);