import axios from 'axios';
import {
  createReducer,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { Activities } from '../../@types';

// Création de l'interface (ce à quoi devra ressembler l'état)
interface ActivitiesState {
  recents: Activities[];
  topRated: Activities[];
  results: Activities[];
}

export const updateRecentsActivities = createAsyncThunk(
  'ACTIVITIES/UPDATE_RECENTS_ACTIVITIES',
  async () => {
    const { data } = await axios.get('http://localhost:3000/activity/recent');
    return data as { data: Activities[] };
  }
);
export const updateRatingActivities = createAsyncThunk(
  'ACTIVITIES/UPDATE_RATING_ACTIVITIES',
  async () => {
    const { data } = await axios.get('http://localhost:3000/activity/rating');
    return data as { data: Activities[] };
  }
);

// On initialise notre state de départ
const initialState: ActivitiesState = {
  recents: [
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
  topRated: [
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
  results: [
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
export const activitiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateRecentsActivities.fulfilled, (state, action) => {
      state.recents = action.payload.data;
    })
    .addCase(updateRatingActivities.fulfilled, (state, action) => {
      state.topRated = action.payload.data;
    });
  //
});
