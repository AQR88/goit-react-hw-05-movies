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
        const { data } = await getAllMoviesList();
        // console.log('API Response:', data);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllList();
  }, []);

  return { movies, error, loading };
};
