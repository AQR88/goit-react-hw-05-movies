// import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { routes } from 'routes';

export const SharedLayout = () => {
  return (
    <>
      <nav>
        <Link to={routes.HOME}>
          <span> Home </span>
        </Link>

        <Link to={routes.MOVIES}>
          <span> Movies </span>
        </Link>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
