import { Loader } from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useFetchMovieDetails } from 'hooks';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';

export const MoviesDetails = () => {
  const { movie, error, loading } = useFetchMovieDetails();
  console.log(movie);
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  return (
    <>
      {loading && <Loader />}
      {error && <h3> Something went wrong🙄... </h3>}
      <MovieDetails movie={movie} />
      <ReturnBtn path={goBack.current} />
      <ul>
        <li>
          <Link to="cast"> Cast </Link>
        </li>
        <li>
          <Link to="reviews"> Reviews </Link>
        </li>
      </ul>
      <Suspense fallback={<div> Loading ... </div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
// export default MoviesDetails;