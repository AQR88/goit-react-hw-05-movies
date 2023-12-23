import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <>
      <h2>Movie</h2>
      <img
        src="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=350x200"
        alt="defaultImg"
      />
      <ul>
        <li>
          <Link to="cast"> Cast </Link>
        </li>
        <li>
          <Link to="reviews"> Reviews </Link>
        </li>
      </ul>
      <Suspense fallback={<div> Loading ... </div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
