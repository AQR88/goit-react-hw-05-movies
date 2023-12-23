// import axios from 'axios';
// const API_KEY = '59c23f1ca3f0598e75e89f97fb0baa40';
// const BASE_URL = 'https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWMyM2YxY2EzZjA1OThlNzVlODlmOTdmYjBiYWE0MCIsInN1YiI6IjY1ODc1MTAyNDc3MjE1NWE2YTQzNTNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uonsAa62agVHgsDvAScRGUP-H5qxhe1BfIeh7U1Itk',
  },
};

fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// ПРИКЛАД ОБ'ЄКТА, ЩО ПОВЕРНУВСЯ
// {
//     "poster_path": "/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
//     "adult": false,
//     "overview": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
//     "release_date": "2016-10-19",
//     "genre_ids": [
//       53,
//       28,
//       80,
//       18,
//       9648
//     ],
//     "id": 343611,
//     "original_title": "Jack Reacher: Never Go Back",
//     "original_language": "en",
//     "title": "Jack Reacher: Never Go Back",
//     "backdrop_path": "/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",
//     "popularity": 26.818468,
//     "vote_count": 201,
//     "video": false,
//     "vote_average": 4.19
//   }

// const reviews = 'https://api.themoviedb.org/3/movie/{movie_id}/reviews';
// const credits = 'https://api.themoviedb.org/3/movie/{movie_id}/credits';
// const fullInfo = 'https://api.themoviedb.org/3/movie/{movie_id}';
// const query = 'https://api.themoviedb.org/3/search/movie';
// const allList = 'https://api.themoviedb.org/3/trending/all/{time_window}';
