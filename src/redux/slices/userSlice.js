import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  refreshUser,
  VerifyEmail,
  SendMailPassword,
} from '../operations/userOperations';

import {
  handleRegisterUser,
  handleAuthUser,
  handleLogOutUser,
  hadleRefreshUser,
  handleVerifyEmail,
  handleSendTempPassword,
  anyrefreshUserPending,
  anyrefreshUserRejected,
} from './userSliceReducer';

const phonebookUserSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null, verificationToken: null, verify: false },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    temporaryPassword: null,
    // verify: false,
    // verificationToken: null,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, handleRegisterUser)
      .addCase(logInUser.fulfilled, handleAuthUser)
      .addCase(logOutUser.fulfilled, handleLogOutUser)
      .addCase(VerifyEmail.fulfilled, handleVerifyEmail)
      .addCase(SendMailPassword.fulfilled, handleSendTempPassword)
      .addCase(refreshUser.pending, anyrefreshUserPending)
      .addCase(refreshUser.fulfilled, hadleRefreshUser)
      .addCase(refreshUser.rejected, anyrefreshUserRejected),
});

export const phonebookUserReducer = phonebookUserSlice.reducer;
