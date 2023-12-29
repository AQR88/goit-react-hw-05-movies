import { Loader } from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useFetchMovieDetails } from 'hooks';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';

const MoviesDetailsPage = () => {
  const { movie, error, loading } = useFetchMovieDetails();
  console.log(movie);
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  return (
    <>
      {loading && <Loader />}
      {error && <h3> Something went wrong🙄... </h3>}
      <ReturnBtn path={goBack.current} />
      {movie && <MovieDetails movie={movie} />}
      <ul
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <li>
          <Link to="cast">
            <h4 style={{ color: 'black' }}>Cast</h4>{' '}
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <h4 style={{ color: 'black' }}>Reviews</h4>{' '}
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div> Loading ... </div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MoviesDetailsPage;
