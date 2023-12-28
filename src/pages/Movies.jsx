import { Loader } from 'components/Loader/Loader';
import { MovieSearchForm } from 'components/MovieSearchForm/MovieSearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import useFetchByQuery from 'hooks/useFetchByQuery';

export const Movies = () => {
  const { movies, error, isLoading, handleSubmit } = useFetchByQuery();
  return (
    <>
      <MovieSearchForm handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <h3> Something went wrong🙄... </h3>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
