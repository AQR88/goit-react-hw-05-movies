const MovieDetails = ({ title, poster_path, popularity, overview, genres }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const genreList = genres
    ? genres.map(elem => elem.name).join(',')
    : 'There is no information yet';

  return (
    <>
      <div style={{ display: 'flex', gap: '15px', margin: '15px' }}>
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
          {title ? (
            <h3>{title}</h3>
          ) : (
            <p>
              <h3>Title:</h3> No info
            </p>
          )}
          <h3>User Score: </h3>
          {popularity ? <p>{popularity}</p> : <p> No info</p>}
          <h3>Overview:</h3>
          {overview ? <p>{overview}</p> : <p> No info</p>}
          <h3>Genres:</h3>
          <p>{genreList}</p>
        </div>
      </div>
      <h4>Additional information</h4>
    </>
  );
};

export default MovieDetails;
