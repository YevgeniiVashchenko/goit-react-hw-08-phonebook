import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUsername = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectIsUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectIsRefreshingUser = state => state.auth.isRefreshingUser;

export const selectContacts = state => state.contacts.items;
export const selectContactsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);