import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Home, MoviesDetails, Movies } from 'pages';
export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />,
      <Route path={routes.MOVIES} element={<Movies />} />,
      <Route path={routes.MOVIESDETAILS} element={<MoviesDetails />} />,
    </Routes>
  );
};
