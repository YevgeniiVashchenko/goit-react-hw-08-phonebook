import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    isRefreshingUser: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshingUser = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isRefreshingUser = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoading = false;
        state.isRefreshingUser = false;
      })
      .addMatcher(
        isAnyOf(signUp.pending, logIn.pending, logOut.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        (state, action) => {
          state.user.name = action.payload.user.name;
          state.user.email = action.payload.user.email;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(signUp.rejected, logIn.rejected, logOut.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;