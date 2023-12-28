// import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { routes } from 'routes';

export const SharedLayout = () => {
  return (
    <>
      <nav style={{ display: 'flex', gap: '15px', flexDirection: 'row' }}>
        <Link to={routes.HOME}>
          <h3> Home </h3>
        </Link>

        <Link to={routes.MOVIES}>
          <h3> Movies </h3>
        </Link>
      </nav>

      <Suspense fallback={<div> Loading page... </div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
