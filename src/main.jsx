import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
// import Store, {loader as StoreLoader} from './routes/store.jsx';
// import OurTeams, {loader as OurTeamsLoader} from './routes/ourteams.jsx';
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
    // children: [
    //     {
    //       path: '/accueil',
    //       element: <Accueil />,
    //       loader: StoreLoader,
    //     },
    //     {
    //       path: '/team/:teamName',
    //       element: <Suspense fallback={<Loading />}>
    //       <OurTeams />
    //     </Suspense>,
    //       loader: OurTeamsLoader,
    //     }
    // ]
  },
  {
    path: '/about',
    element: <About />
  },
  
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
