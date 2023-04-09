import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (__, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data; //те що повертаємо звідси це payload.success
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//одразу деструктуризуємо rejectWithValue from thunkAPI
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/patchContact',
  async ({ newData, contactId }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, newData);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
