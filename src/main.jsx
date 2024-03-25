import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';

import Accueil, {loader as AgeLoader} from './routes/age.jsx';
import Menu, {loader as MenuLoader} from './routes/menu.jsx';
import Quizz, {loader as QuizzLoader} from './routes/quizz.jsx';
import ErrorPage from './ui/ErrorPage'


import './index.css';



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
        {
          path: '/menu/:ageName',
          element: <Menu />,
          loader: MenuLoader,
        },
        {
          path: '/quizz/:ageName',
          element: <Quizz />,
          loader: QuizzLoader,
        },

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
