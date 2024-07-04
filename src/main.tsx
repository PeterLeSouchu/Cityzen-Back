import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Root from './pages/Roots';
import './styles/index.css';

import AboutPage from './pages/AboutPage';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import InfosPage from './pages/InfosPage';
import FavoritePage from './pages/FavoritePage';
import NotFound from './pages/NotFound';
import MyActivitiesPage from './pages/MyActivitiesPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/profile" element={<ProfilePage />}>
        <Route path="/profile/favorites" element={<FavoritePage />} />
        <Route path="/profile/my-activities" element={<MyActivitiesPage />} />
        <Route index element={<InfosPage />} />
      </Route>

      <Route index element={<HomePage />} />
    </Route>
  )
);

// Ici on utilise le stricmode pour nous aider à detecter les problèmes.
// Puis on ajoute notre store au router
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
