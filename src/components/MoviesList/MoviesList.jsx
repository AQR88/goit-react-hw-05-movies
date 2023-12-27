import { Link } from 'react-router-dom';
import { routes } from 'routes';

export const MoviesList = ({ movies }) => {
  // const location = useLocation();

  return (
    <ul>
      {movies.map(
        ({ id, title }) =>
          title && (
            <li key={id}>
              <Link to={`${routes.MOVIES}/${id}`}>
                <h4>{title}</h4>
              </Link>
            </li>
          )
      )}
    </ul>
  );
};
