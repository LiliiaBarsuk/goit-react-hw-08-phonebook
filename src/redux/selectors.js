import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filterValue;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
    [getContacts, getFilter], (contacts, filter) => {

    if (!filter) {
      return contacts
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  
})