import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  toastSuccessRegister,
  toastSuccessLogIn,
  toastSuccessLogOut,
  toastError,
} from 'components/services/toasts';
import { baseAxiosURL } from './baseUrl';

axios.defaults.baseURL = baseAxiosURL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      toastSuccessRegister();
      // setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toastError();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', credentials);
      toastSuccessLogIn();
      setAuthHeader(res.data.user.token);
      return res.data.user;
    } catch (error) {
      toastError();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.get('/users/logout');
      toastSuccessLogOut();
      clearAuthHeader();
    } catch (error) {
      toastError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      toastError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const VerifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  async (verifyToken, thunkAPI) => {
    try {
      const data = await axios.patch(`/users/verify/${verifyToken}`, {
        verify: true,
        verificationToken: null,
      });
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const SendMailPassword = createAsyncThunk(
  'auth/SendMailPassword',
  async (email, thunkAPI) => {
    try {
      const data = await axios.get(`/users/${email}`);
      return data.data.temporaryPassword;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (password, thunkAPI) => {
    try {
      const user = await axios.patch('/users/password', password);
      return user;
    } catch (error) {}
  }
);
