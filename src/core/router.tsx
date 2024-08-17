import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoaderSpinner from '../components/LoaderSpinner';
import { MainPage, NotFoundPage } from './routingPages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoaderSpinner />}>
        <MainPage />
      </Suspense>
    ),
    children: [],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoaderSpinner />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
  {
    path: '/404',
    element: (
      <Suspense fallback={<LoaderSpinner />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);
