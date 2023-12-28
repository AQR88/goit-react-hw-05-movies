import { Link } from 'react-router-dom';

export const ReturnBtn = ({ path }) => {
  return (
    <Link to={path}>
      <button
        type="button"
        style={{
          borderRadius: '4px',
          marginLeft: '25px',
        }}
      >
        ⬅ Return
      </button>
    </Link>
  );
};
