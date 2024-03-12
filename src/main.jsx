import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';

import Accueil, {loader as AgeLoader} from './routes/age.jsx';
import ErrorPage from './ui/ErrorPage'

import { Suspense } from 'react';

import './index.css';

function Loading() {
  return <h2>🌀 Chargement...</h2>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement:<ErrorPage />,
    children: [
         {
          path: '/',
          element: <Accueil />,
          loader: AgeLoader,
         },
        //  {
        //   path: '/menu',
        //   element: <Menu />,
        //   loader: MenuLoader,
        //  },

    ]
  }
  
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
