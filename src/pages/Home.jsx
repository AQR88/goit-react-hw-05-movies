import { Loader } from 'components/Loader/Loader';
import { useFetchAllMovies } from 'hooks';

export const Home = () => {
  const { movies, error, loading } = useFetchAllMovies();

  return (
    <div>
      {loading && <Loader />}
      {error && <h3> Something went wrong🙄 </h3>}
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};
