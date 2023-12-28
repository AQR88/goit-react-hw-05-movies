import { useFetchMovieCast } from 'hooks/useFetchMovieCast';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const movieCast = useFetchMovieCast();
  console.log(movieCast);
  return (
    <>
      <h3>Movie cast</h3>
      <ul>
        {movieCast.credits.map(
          ({ movie_id, profile_path, original_name, character }) => (
            <li key={movie_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                alt={original_name}
                width={250}
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Cast;
