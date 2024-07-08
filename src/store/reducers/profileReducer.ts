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
      id
    );
    return data as { data: Activities };
  }
);
export const deleteFromFavorites = createAsyncThunk(
  'PROFILE/ADELETE-FROM-FAVORITES',
  async ({ id }: { id: number }) => {
    const { data } = await axios.delete(
      `http://localhost:3000/profil/favorite${id}`
    );
    return data as { data: number };
  }
);

export const isLogged = createAction('PROFILE/IS_LOGGED');

export const getFavorites = createAsyncThunk(
  'PROFILE/GET-FAVORITES',
  async () => {
    const { data } = await axios.get(`http://localhost:3000/profil/favorite`);
    return data as { data: Activities[] };
  }
);

// On initialise notre state de départ
const initialState: ActivitiesState = {
  logged: false,
  credentials: { pseudo: 'Tom', email: 'tom@gmail.com' },
  myFavorites: [
    {
      id: 2,
      title: 'test',
      url: 'test',
      description: 'test',
      avg_rate: 2,
      image: 'test',
      address: 'test',
      phone: 'test',
      latitude: 2,
      longitude: 2,
      city_id: 2,
    },
  ],
};

// On créé le reducer
export const profileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToFavorites.fulfilled, (state, action) => {
      state.myFavorites.push(action.payload.data);
    })
    .addCase(deleteFromFavorites.fulfilled, (state, action) => {
      state.myFavorites = state.myFavorites.filter(
        (activity) => activity.id !== action.payload.data
      );
    })
    .addCase(getFavorites.fulfilled, (state, action) => {
      state.myFavorites = action.payload.data;
    })
    .addCase(isLogged, (state) => {
      state.logged = true;
    });
});
