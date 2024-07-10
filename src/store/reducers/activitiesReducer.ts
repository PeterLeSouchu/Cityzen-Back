import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { Activities } from '../../@types';

// Création de l'interface (ce à quoi devra ressembler l'état)
interface ActivitiesState {
  searchedActivities: Activities[];
}

export const fetchActivitiesByCountryCity = createAsyncThunk(
  'ACTIVITIES/FETCH_BY_COUNTRY_CITY',
  async ({ country, city }: { country: string; city: string }) => {
    // API externe (temporaire)
    const options = {
      method: 'GET',
      url: `http://localhost:3000/activity/${country}/${city}`,
    };
    const { data } = await axios.request(options);

    // if (data.length === 0) {

    // }
    // compléter avec les données de notre API
    return data as Activities[];
  }
);

// On initialise notre state de départ
const initialState: ActivitiesState = {
  searchedActivities: [],
};

// On créé le reducer
export const activitiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchActivitiesByCountryCity.fulfilled, (state, action) => {
      state.searchedActivities = action.payload;
    })
    .addCase(fetchActivitiesByCountryCity.rejected, (state) => {
      state.searchedActivities = [];
    });
  //
});
