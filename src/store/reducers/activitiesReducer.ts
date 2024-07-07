import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { Activities } from '../../@types';

// Création de l'interface (ce à quoi devra ressembler l'état)
interface ActivitiesState {
  searchedActivities: Activities[];
}

export const fecthActivitiesByCountryCity = createAsyncThunk(
  'ACTIVITIES/FETCH_BY_COUNTRY_CITY',
  async ({ country, city }: { country: string; city: string }) => {
    const { data } = await axios.get(
      `http://localhost:3000/activity/${country}/${city}`
    );
    return data as { data: Activities[] };
  }
);

// On initialise notre state de départ
const initialState: ActivitiesState = {
  searchedActivities: [
    {
      id: 2,
      title: 'test',
      url: 'test',
      description: 'test',
      avg_rate: 2,
      image:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/13/regular.png',
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
  builder.addCase(fecthActivitiesByCountryCity.fulfilled, (state, action) => {
    state.searchedActivities = action.payload.data;
  });
  //
});
