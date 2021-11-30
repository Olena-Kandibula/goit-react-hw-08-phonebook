import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const BASE_URL = 'https://connections-api.herokuapp.com';
const getToken = () => JSON.parse(localStorage.getItem('persist:auth')).token;

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.response);
  }
});

// export const logIn = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     token.set(data.token);

// console.log(credentials)
//     return data
//   } catch (error) {
//     console.log(error.response);
//   }
// });
export const logIn = createAsyncThunk(
  'auth/login',
  async function (credentials, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: [JSON.parse(getToken())],
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Login disabled! Try again!');
      }
      const data = await response.json();
      console.log(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error.response);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error.response);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,

    status: null,
    error: null,
  },

  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    //   [logIn.pending]: (state, action) => {
    //   state.user =null;
    //   // state.token = action.payload.token;
    //   state.isLoggedIn = false;
    // },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
