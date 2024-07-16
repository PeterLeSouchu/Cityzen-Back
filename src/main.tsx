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
import ProtectedRoute from './utils/ProtectedRoute';

import Root from './pages/Roots';
import './styles/index.css';

import AboutPage from './pages/AboutPage';
import ActivityPage, { loadActivity } from './pages/ActivityPage';
import HomePage, { loadActivities } from './pages/HomePage';
import ActivitiesPage from './pages/ActivitiesPage';
import ProfilePage from './pages/ProfilePage';
import InfosPage from './pages/InfosPage';
import FavoritePage from './pages/FavoritePage';
import NotFound from './pages/NotFound';
import MyActivitiesPage from './pages/MyActivitiesPage';
import LegalNotices from './pages/LegalNotices';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/* - Dans le router on utilise une route protégée pour interdire les utilisateurs non
      connectés d'accéder à ces pages là

   - On trouve aussi  un système d'imbrication de route. Cela permet à la route "mère" d'attribuer un modele que l'on retrouvera sur toutes les pages enfant. Le composant Outlet présent dans la route mère s'adaptera en fonction de la route choisi. Par exemple la route mère "/" possede une route enfant "/about", ainsi quand on accedera à la route "/about" dans le nav, on aura le header et le footer hérités de la mère, et le composant Outlet prendra l'élément aboutPage.

   - On touve également un attribut sur une des route enfant nommé "index", il sert à donné un composant par défaut à la route mère.  */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route index element={<HomePage />} loader={loadActivities} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/activity/:id"
        element={<ActivityPage />}
        loader={loadActivity}
      />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<InfosPage />} />
          <Route path="/profile/favorites" element={<FavoritePage />} />
          <Route path="/profile/my-activities" element={<MyActivitiesPage />} />
        </Route>
      </Route>
      <Route path="/legal-notices" element={<LegalNotices />} />
    </Route>
  )
);

// Ici on utilise le strictmode pour nous aider à detecter les problèmes pendant la phase de dev uniquement.
// Puis on ajoute notre store au router
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
