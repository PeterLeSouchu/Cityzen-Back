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
    console.log(data);

    // compléter avec les données de notre API
    return data.map((activity: Activities[]) => ({
      id: activity.id,
      title: activity.title,
      url: activity.url,
      description: activity.description,
      avg_rate: activity.avg_rate,
      image: activity.image,
      address: activity.address,
      phone: activity.phone,
      latitude: activity.latitude,
      longitude: activity.longitude,
      city_id: activity.city_id,
    })) as Activities[];
  }
);

// On initialise notre state de départ
const initialState: ActivitiesState = {
  searchedActivities: [],
};

// On créé le reducer
export const activitiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchActivitiesByCountryCity.fulfilled, (state, action) => {
    state.searchedActivities = action.payload;
  });
  //
});
