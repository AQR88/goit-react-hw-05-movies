import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const MoviesDetailsPage = lazy(() => import('../pages/MoviesDetailsPage'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.HOME} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIESDETAILS} element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
