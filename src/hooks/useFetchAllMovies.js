import { useEffect, useState } from 'react';
import { getAllMoviesList } from 'services/movie-service';

export const useFetchAllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAllList = async () => {
      try {
        console.log('Before API Call');
        const { data } = await getAllMoviesList();
        console.log('API Response:', data);
        setMovies(data.results);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchAllList();
  }, [error]);

  return { movies, error, loading };
};
