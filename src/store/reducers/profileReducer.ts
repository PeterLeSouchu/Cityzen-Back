import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Credentials, Activities } from '../../@types';

// Création de l'interface (ce à quoi devra ressembler l'état)
interface ActivitiesState {
  logged: boolean;
  credentials: Credentials;
  myFavorites: Activities[];
}

export const addToFavorites = createAsyncThunk(
  'PROFILE/ADD-TO-FAVORITES',
  async ({ id }: { id: number }) => {
    const { data } = await axios.post(
      'http://localhost:3000/profil/favorite',
      { id },
      {
        withCredentials: true,
      }
    );
    return data.data as Activities;
  }
);
export const deleteFromFavorites = createAsyncThunk(
  'PROFILE/ADELETE-FROM-FAVORITES',
  async ({ id }: { id: number }) => {
    const { data } = await axios.delete(
      `http://localhost:3000/profil/favorite/${id}`,
      {
        withCredentials: true,
      }
    );
    return data.data.id as number;
  }
);

export const getFavorites = createAsyncThunk(
  'PROFILE/GET-FAVORITES',
  async () => {
    const { data } = await axios.get(`http://localhost:3000/profil/favorite`, {
      withCredentials: true,
    });
    return data.data as Activities[];
  }
);

export const login = createAction<{ pseudo: string; email: string }>(
  'PROFILE/LOGIN'
);

export const logout = createAsyncThunk('PROFILE/LOGOUT', async () => {
  await axios.post(
    `http://localhost:3000/signout`,
    {},
    {
      withCredentials: true,
    }
  );
  return true;
});

// On initialise notre state de départ
const initialState: ActivitiesState = {
  logged: JSON.parse(localStorage.getItem('logged') || 'false'),
  credentials: { pseudo: 'Tom', email: 'tom@gmail.com' },
  myFavorites: JSON.parse(localStorage.getItem('myFavorites') || '[]'),
};

// On créé le reducer
export const profileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToFavorites.fulfilled, (state, action) => {
      state.myFavorites.push(action.payload);
      localStorage.setItem('myFavorites', JSON.stringify(state.myFavorites));
    })
    .addCase(deleteFromFavorites.fulfilled, (state, action) => {
      state.myFavorites = state.myFavorites.filter(
        (activity) => activity.id !== action.payload
      );
      localStorage.setItem('myFavorites', JSON.stringify(state.myFavorites));
    })
    .addCase(getFavorites.fulfilled, (state, action) => {
      state.myFavorites = action.payload;
      localStorage.setItem('myFavorites', JSON.stringify(action.payload));
    })
    .addCase(login, (state, action) => {
      console.log(action.payload);
      state.logged = true;
      localStorage.setItem('logged', 'true');
    })
    .addCase(logout.fulfilled, (state) => {
      state.logged = false;
      localStorage.setItem('logged', JSON.stringify(state.logged));
      state.myFavorites = [];
      localStorage.setItem('myFavorites', JSON.stringify(state.myFavorites));
    });
});
