import axios from 'axios';
const API_KEY = 'fbbb87f265f1009fcdb9953a67cffae1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getAllMoviesList = async () => {
  const { data } = await axios.get(`trending/all/day`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return data.results;
};

export const getMovieFullInfo = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.reviews;
};

/*  TOKEN */
// const token =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmJiODdmMjY1ZjEwMDlmY2RiOTk1M2E2N2NmZmFlMSIsInN1YiI6IjY1ODc1MTAyNDc3MjE1NWE2YTQzNTNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zUvMgvWMYDwOu0prpiC6iEuO1tMgEQMN3yw303GJHyI';
// const headers = {
//   Authorization: `Bearer ${token}`,
// };
// export const getAllMoviesList = async () => {
//   const { response } = await axios.get(`trending/all/day`, { headers });
//   return response.results;
// };
