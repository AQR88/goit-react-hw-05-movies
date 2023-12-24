import { useFetchAllMovies } from 'hooks';

export const Home = () => {
  const { movies, error, loading } = useFetchAllMovies();

  return (
    <div>
      {loading && <h3> Loading ... </h3>}
      {error && <h3> Something went wrong🙄 </h3>}
      {movies}
    </div>
  );
};
