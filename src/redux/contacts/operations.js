import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
          number: contact.number 
        });
        console.log(response.data);
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

export const fetchContactById = createAsyncThunk("contacts/fetchById", 
async (contactId, thunkAPI) => {
  try {
    const contact = await axios.get(`/contacts/${contactId}`);
    return contact.data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

