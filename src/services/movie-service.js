import axios from 'axios';
const API_KEY = '8ce1621260b74e6098b536a0b1ea63ad';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getAllMoviesList = async () => {
  try {
    const data = await axios(`/trending/all/day?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieByQuery = async query => {
  try {
    const data = await axios(
      `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieFullInfo = async movie_id => {
  try {
    const data = await axios(`/movie/${movie_id}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getMovieCast = async movie_id => {
  try {
    const data = await axios(`/movie/${movie_id}/credits?api_key=${API_KEY}`);
    return data.credits;
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async movie_id => {
  try {
    const data = await axios(`/movie/${movie_id}/reviews?api_key=${API_KEY}`);
    return data.reviews;
  } catch (error) {
    throw error;
  }
};
