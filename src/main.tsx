import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Root from './pages/Roots';
import './styles/index.css';

import AboutPage from './pages/AboutPage';

import ActivityPage from './pages/ActivityPage';

import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/activites" element={<ActivityPage />} />

      <Route index element={<HomePage />} />
    </Route>
  )
);

root.render(<RouterProvider router={router} />);
