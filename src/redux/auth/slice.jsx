import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from 'redux/auth/operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const HandleError = state => {
  state.isRefreshing = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      // .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      // .addCase(register.rejected, HandleError)
      // .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleFulfilled)
      // .addCase(login.rejected, HandleError)
      // .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, handleFulfilledLogout)
      // .addCase(logout.rejected, HandleError)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, HandleError),
});

export const authReducer = authSlice.reducer;
