import { useParams } from 'react-router-dom';

const { useState, useEffect } = require('react');
const { getMovieFullInfo } = require('services/movie-service');

export const useFetchMovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    const fetchMovie = async () => {
      try {
        const data = await getMovieFullInfo(movieId);
        setMovie(data);
      } catch (error) {
        setError('Something went wrong🙄');
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);
  return { movie, error, loading };
};
