import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movie-service';

export const useFetchMovieCast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movie_id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (!movie_id) return;
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCast(movie_id);
        setCredits(data.cast);
      } catch (error) {
        setError('Something went wrong🙄');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [movie_id]);

  return { credits, error, loading };
};
