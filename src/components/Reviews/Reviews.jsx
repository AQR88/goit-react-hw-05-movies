import { useFetchMovieReviews } from 'hooks';

const Reviews = () => {
  const reviews = useFetchMovieReviews();

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <li>There is no information jet</li>
      )}
    </ul>
  );
};

export default Reviews;
