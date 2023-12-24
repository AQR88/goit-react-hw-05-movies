import axios from 'axios';
// const API_KEY = '0c03ea7910f2d749f11780bc2f86f065';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export const getAllMoviesList = async () => {
//   const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

//   return data;
// };

// export const getMovieByQuery = async query => {
//   const { data } = await axios.get(
//     `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
//   );

//   return data;
// };

// export const getMovieFullInfo = async movieId => {
//   const { data } = await axios.get(
//     `movie/${movieId}?api_key=${API_KEY}&language=en-US`
//   );
//   return data;
// };

// export const getMovieCast = async movieId => {
//   const { data } = await axios.get(
//     `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//   );
//   return data;
// };

// export const getMovieReviews = async movieId => {
//   const { data } = await axios.get(
//     `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
//   );

//   return data;
// };

export const getAllMoviesList = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzAzZWE3OTEwZjJkNzQ5ZjExNzgwYmMyZjg2ZjA2NSIsInN1YiI6IjY1ODg0MzE0ZWE3YjBlNWVkZThmZTljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qA2sHhacFqnmcT5fT9NeGW7dl0D0gVzTjmAWBnseNnQ',
    },
  };

  try {
    const data = await axios(options);
    return data;
  } catch (error) {
    throw error;
  }
};

// export const getMovieByQuery = async query => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/search/movie',
//     params: { query: '', include_adult: 'false', language: 'en-US', page: '1' },
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzAzZWE3OTEwZjJkNzQ5ZjExNzgwYmMyZjg2ZjA2NSIsInN1YiI6IjY1ODg0MzE0ZWE3YjBlNWVkZThmZTljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qA2sHhacFqnmcT5fT9NeGW7dl0D0gVzTjmAWBnseNnQ',
//     },
//   };
//   try {
//     const data = await axios(options);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getMovieFullInfo = async movieId => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/movie/1',
//     params: { language: 'en-US' },
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzAzZWE3OTEwZjJkNzQ5ZjExNzgwYmMyZjg2ZjA2NSIsInN1YiI6IjY1ODg0MzE0ZWE3YjBlNWVkZThmZTljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qA2sHhacFqnmcT5fT9NeGW7dl0D0gVzTjmAWBnseNnQ',
//     },
//   };

//   try {
//     const data = await axios(options);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
// export const getMovieCast = async movieId => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/movie/1/credits',
//     params: { language: 'en-US' },
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzAzZWE3OTEwZjJkNzQ5ZjExNzgwYmMyZjg2ZjA2NSIsInN1YiI6IjY1ODg0MzE0ZWE3YjBlNWVkZThmZTljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qA2sHhacFqnmcT5fT9NeGW7dl0D0gVzTjmAWBnseNnQ',
//     },
//   };
//   try {
//     const data = await axios(options);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getMovieReviews = async movieId => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/movie/1/reviews',
//     params: { language: 'en-US', page: '1' },
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzAzZWE3OTEwZjJkNzQ5ZjExNzgwYmMyZjg2ZjA2NSIsInN1YiI6IjY1ODg0MzE0ZWE3YjBlNWVkZThmZTljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qA2sHhacFqnmcT5fT9NeGW7dl0D0gVzTjmAWBnseNnQ',
//     },
//   };
//   try {
//     const data = await axios(options);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

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
