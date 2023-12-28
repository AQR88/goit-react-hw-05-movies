import { useFetchMovieReviews } from 'hooks';

const Reviews = () => {
  const movieReviews = useFetchMovieReviews();

  return (
    <>
      <h3>Rewievs</h3>
      <ul>
        {movieReviews.length !== 0 ? (
          movieReviews.reviews.map(({ movie_id, author, content }) => (
            <li key={movie_id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>There is no information yet🙄 </p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
