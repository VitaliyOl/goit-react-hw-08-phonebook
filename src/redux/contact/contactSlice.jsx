import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchContacts, addContact, deleteContact, changeContact} from './operations';

const fetchArr = [fetchContacts, addContact, deleteContact, changeContact];

const fnctAddMatcher = status => {
  return fetchArr.map(el => el[status]);
};

const handleFulfield = state => {
  state.isLoading = true;
};

const utilsStateFnct = state => {
  state.isLoading = false;
  state.error = null;
};

const handleSuccess = (state, { payload }) => {
  state.items = payload;
  utilsStateFnct(state);
};

const handleSuccessDelete = (state, { payload }) => {
  state.items = state.items.filter(el => el.id !== payload.id);
  utilsStateFnct(state);
};

const handleSuccessAdd = (state, { payload }) => {  
  state.items.push(payload);
  utilsStateFnct(state);
};


const HandleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledChange = (state, { payload }) => {
  const index = state.items.findIndex(({ id }) => id === payload.id);
  if (index !== -1) {
    state.items[index] = payload;
  }
  utilsStateFnct(state);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleSuccess)
      .addCase(addContact.fulfilled, handleSuccessAdd)
      .addCase(deleteContact.fulfilled, handleSuccessDelete)
      .addCase(changeContact.fulfilled, handleFulfilledChange)
      .addMatcher(isAnyOf(...fnctAddMatcher('pending')), handleFulfield)      
      .addMatcher(isAnyOf(...fnctAddMatcher('rejected')), HandleError),
});

export const contactsReducer = contactsSlice.reducer;
