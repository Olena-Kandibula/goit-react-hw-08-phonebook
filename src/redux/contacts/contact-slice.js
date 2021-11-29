import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/contacts';
const getToken = () => JSON.parse(localStorage.getItem('persist:auth')).token;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',

  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(BASE_URL, {
        headers: {
          Authorization: [JSON.parse(getToken())],
        },
      });
      if (!response.ok) {
        throw new Error('error server!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeContact = createAsyncThunk(
  'contacts/remove',

  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: [JSON.parse(getToken())],
        },
      });

      if (!response.ok) {
        throw new Error("Can't delete contact!Error Server!");
      }

      dispatch(deleteContact(id));
      // const data = await response.json();
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addcontact',

  async function (contactNew, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: [JSON.parse(getToken())],
        },
        body: JSON.stringify(contactNew),
      });

      if (!response.ok) {
        throw new Error("Can't add contact! Error Server!");
      }

      const data = await response.json();
      dispatch(addContactNew(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const filterContact = createAsyncThunk(
  'contacts/filter',
  async function (value, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`?filter=${value}`, {
        metod: 'GET',
      });
      if (!response.ok) {
        throw new Error("Can't filtered contact!Error Server!");
      }
      dispatch(changeFilter(value));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};
const setPending = state => {
  // state.status = 'loading';
  state.error = null;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    status: null,
    error: null,
  },

  reducers: {
    addContactNew(state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: setPending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.status = 'resolved';
      state.error = null;
    },
    [fetchContacts.rejected]: setError,

    [addContact.pending]: setPending,
    [addContact.fulfilled]: function (state, action) {
      state.status = 'resolved';
      state.error = null;
    },
    [addContact.rejected]: setError,

    [removeContact.pending]: setPending,
    [removeContact.fulfilled]: state => {
      state.status = 'resolved';
      state.error = null;
    },
    [removeContact.rejected]: setError,
  },
});

const { addContactNew, deleteContact, changeFilter } = contactSlice.actions;
export default contactSlice.reducer;

// ===================
// const readContacts = () => {
//   return fetch(url, {
//     headers: {
//       Authorization: [JSON.parse(getToken())]
//     },
//   }).then(res => res.json());
// }
// const addContacts = (contact) => {

//     return fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: [JSON.parse(getToken())],
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(contact),
//     });
//   }

//     const deleteContacts = contactId => {
//         return fetch(url + '/' + contactId, {
//           method: 'delete',
//           headers: {
//             Authorization: [JSON.parse(getToken())],
//           },
//         }).then(res => res.json());

// }

// export const readContacts = createAsyncThunk(
//   'contacts/readContacts',
//     async (_, { rejectWithValue }) => {
//         try {
//           const contacts = await api.readContacts();
//             return contacts;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//   },
// );
// export const addContacts = createAsyncThunk(
//   'contacts/addContacts',
//   async (contact, { rejectWithValue }) => {
//         try {
//           const result = await api.addContacts(contact).then(res => res.json());
//           return result;
//         } catch (error) {
//             return rejectWithValue(error.response);
//         }
//   },
// );

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContacts',
//     async (contactId, { rejectWithValue }) => {
//         try {
//             await api.deleteContacts(contactId);
//             return contactId;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//   },
// );
