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
import HomePage from './pages/HomePage';
import Activities from './pages/Activities';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/activities" element={<Activities />} />
    </Route>
  )
);

root.render(<RouterProvider router={router} />);
