import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/movie-service';

const useFetchByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    setLoading(true);
    if (!query) return;
    const fetchResponse = async () => {
      try {
        const { data } = await getMovieByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError('Something went wrong🙄');
      } finally {
        setLoading(false);
      }
    };
    fetchResponse();
  }, [query]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  return { movies, error, loading, handleSubmit };
};

export default useFetchByQuery;
