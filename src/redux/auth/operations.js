import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      toast.success("You have successfully registered!");
      return res.data;
    } catch (error) {
      toast.error("Sorry! Check your data");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
     
      setAuthHeader(res.data.token);
      toast.success("You have successfully log in!");
      return res.data;
    } catch (error) {
      toast.error("Sorry! Check your data");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    toast.success("You have successfully log out!");
    clearAuthHeader();
  } catch (error) {
    toast.error("Sorry! Check your data");
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {

      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {

      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      toast.error("Sorry! Check your data");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);