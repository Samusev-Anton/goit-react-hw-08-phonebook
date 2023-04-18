import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  toastSuccessAdd,
  toastSuccessDelete,
  toastError,
} from 'components/services/toasts';
import { baseAxiosURL } from './baseUrl';

axios.defaults.baseURL = baseAxiosURL;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (credentials, thunkApi) => {
    try {
      const contacts = await axios.post('/contacts', credentials);
      toastSuccessAdd();
      return contacts.data.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      toastSuccessDelete();
      return contacts.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'contacts/addToFavorite',
  async (filteredContact, thunkApi) => {
    try {
      const contacts = await axios.patch(
        `/contacts/${filteredContact._id}/favorite`,
        {
          favorite: !filteredContact.favorite,
        }
      );
      return contacts.data.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (contact, thunkApi) => {
    try {
      const contacts = await axios.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
      });
      toastSuccessAdd();
      return contacts.data.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);
