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
  myActivities: [
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

export const isLoggin = createAction('SETTINGS/TOGGLE_SETTINGS');
// On créé le reducer
export const profileReducer = createReducer(initialState, (builder) => {
  builder.addCase(isLoggin, (state) => {
    state.logged = !state.logged;
  });
});
