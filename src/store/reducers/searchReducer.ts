import { createReducer, createAction } from '@reduxjs/toolkit';
import { Activities } from '../../@types';

// Création de l'interface (ce à quoi devra ressembler l'état)
interface SearchState {
  results: Activities[];
  city: string;
  country: string;
}
const initialState: SearchState = {
  results: [
    {
      activity_id: 2,
      slug: 'test',
      url: 'test',
      title: 'test',
      description: 'test',
      url_image: 'test',
      address: 'test',
      avg_note: 2,
      phone: 'test',
      latitude: 2,
      longitude: 2,
      user_id: 2,
      city_id: 2,
    },
  ],
  city: 'Paris',
  country: 'France',
};

// On créé le reducer
export const searchReducer = createReducer(initialState, (builder) => {
  //
});
