import { Link } from 'react-router-dom';

export const ReturnBtn = ({ path }) => {
  return (
    <Link to={path}>
      <button type="button">⬅ Return</button>
    </Link>
  );
};
