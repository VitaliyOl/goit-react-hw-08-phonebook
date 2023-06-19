import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, { rejectWithValue }) => {
    console.log(contact);
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success('Add contact');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactsId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactsId}`);
      toast.success('Delete contact');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);




