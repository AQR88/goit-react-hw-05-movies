const MovieDetails = ({
  movie: { title, poster_path, release_date, vote_average, overview, genres },
}) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  if (!genres) return;

  let genre = genres.map(elem => elem.name).join(',');

  return (
    <>
      <div style={{ display: 'flex', gap: '15px' }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
          width={250}
        />
        <div>
          <h3>
            {title}
            {release_date[0]}
            {release_date[1]}
            {release_date[2]}
            {release_date[3]}
          </h3>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <p>{genre}</p>
        </div>
      </div>
      <h3>Additional information</h3>
    </>
  );
};

export default MovieDetails;
