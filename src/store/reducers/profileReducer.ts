import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { Credentials, Activities } from '../../@types';

// Création de l'interface (ce à quoi devra ressembler l'état)
interface ActivitiesState {
  logged: boolean;
  credentials: Credentials;
  myFavorites: Activities[];
}

export const addToFavorites = createAsyncThunk(
  'PROFILE/ADD-RO-FAVORITES',
  async ({ id }: { id: number }) => {
    const { data } = await axios.post(
      'http://localhost:3000/profil/favorite',
      id
    );
    return data as { data: Activities };
  }
);
export const deleteFromFavorites = createAsyncThunk(
  'PROFILE/ADD-RO-FAVORITES',
  async ({ id }: { id: number }) => {
    const { data } = await axios.delete(
      `http://localhost:3000/profil/favorite${id}`
    );
    return data as { data: number };
  }
);

// On initialise notre state de départ
const initialState: ActivitiesState = {
  logged: true,
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
    });
});
