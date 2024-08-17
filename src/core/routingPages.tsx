import { lazy } from 'react';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export { MainPage, NotFoundPage };
