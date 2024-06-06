import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { CoverImage } from './assets/CoverImage';
import { Home } from './pages/Home/';
import { Post } from './pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:issueNumber',
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoverImage />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
