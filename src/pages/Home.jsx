import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useFetchAllMovies } from 'hooks';

export const Home = () => {
  const { movies, error, loading } = useFetchAllMovies();

  return (
    <div>
      {loading && <Loader />}
      {error && <h3> Something went wrong🙄... </h3>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
};
