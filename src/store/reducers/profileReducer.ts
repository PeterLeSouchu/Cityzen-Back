import { createReducer, createAction } from '@reduxjs/toolkit';
import { Credentials, Activities } from '../../@types';

// Création de l'interface (ce à quoi devra ressembler l'état)
interface ActivitiesState {
  logged: boolean;
  credentials: Credentials;
  myFavorites: Activities[];
  myActivities: Activities[];
}

// On initialise notre state de départ
const initialState: ActivitiesState = {
  logged: true,
  credentials: { pseudo: 'Tom', email: 'tom@gmail.com' },
  myFavorites: [
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
  myActivities: [
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
};

// On créé le reducer
export const profileReducer = createReducer(initialState, (builder) => {
  //
});
