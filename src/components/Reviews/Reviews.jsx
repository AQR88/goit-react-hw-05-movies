import { useFetchMovieReviews } from 'hooks';

const Reviews = () => {
  const movieReviews = useFetchMovieReviews();
  if (movieReviews.reviews.length === 0 || !movieReviews.reviews) {
    return (
      <p style={{ textAlign: 'center' }}>There is no information yet🙄 </p>
    );
  }
  return (
    <>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        Rewievs
      </h3>
      <ul>
        {movieReviews.reviews.map(({ movieId, author, content }) => (
          <li key={movieId}>
            <h3 style={{ textAlign: 'center' }}>{author}</h3>
            <p style={{ textAlign: 'left' }}>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
