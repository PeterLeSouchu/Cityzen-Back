import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { Activities } from '../../@types';

// Création de l'interface (ce à quoi devra ressembler l'état)
interface ActivitiesState {
  searchedActivities: Activities[];
}

export const fetchActivitiesByCountryCity = createAsyncThunk(
  'ACTIVITIES/FETCH_BY_COUNTRY_CITY',
  async ({ city }: { city: string }) => {
    // API externe (temporaire)
    const options = {
      method: 'GET',
      url: 'https://airbnb13.p.rapidapi.com/search-location',
      params: {
        location: city,
      },
      // À supprimer (temporaire)
      headers: {
        'x-rapidapi-host': 'airbnb13.p.rapidapi.com',
        ' x-rapidapi-key': '1886de9478mshaee9ecdecf74174p148280jsn111c5d55532c',
      },
    };
    const { data } = await axios.request(options);

    // compléter avec les données de notre API
    return data.results.map((activity: Activities[]) => ({
      id: activity.id,
      title: activity.name,
      url: activity.url,
      description: '',
      avg_rate: activity.rating,
      image: activity.images[0],
      address: activity.address,
      phone: '',
      latitude: activity.lat,
      longitude: activity.lng,
      city_id: activity.userId,
    })) as Activities[];
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
  builder.addCase(fetchActivitiesByCountryCity.fulfilled, (state, action) => {
    state.searchedActivities = action.payload;
  });
  //
});
