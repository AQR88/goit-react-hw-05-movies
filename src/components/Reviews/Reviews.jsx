import { useFetchMovieReviews } from 'hooks';

const Reviews = () => {
  const reviews = useFetchMovieReviews();

  return (
    <>
      <h3>Rewievs</h3>
      <ul>
        {reviews.length !== 0 ? (
          reviews.reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <li>
            <p>There is no information yet🙄 </p>
          </li>
        )}
      </ul>
    </>
  );
};

export default Reviews;
