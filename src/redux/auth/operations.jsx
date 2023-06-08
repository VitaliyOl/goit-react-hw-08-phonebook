import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//POST​/users​/signup

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);

      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);

      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', credentials);
      clearAuthHeader();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//current

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState();
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Something go wrong...');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
