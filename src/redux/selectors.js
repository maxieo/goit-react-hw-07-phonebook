import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.contacts
export const getFilter = state => state.filter
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const visibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => { 
    return contacts.filter(contact => { 
      return contact.name.toLowerCase().includes(filterValue.toLowerCase())
    })
  }
)
