import { AppBarr } from 'components/AppBar/AppBarr';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header, NavHeader, StyledLink } from './Layout.styled';

function Layout() {
  return (
    <>
      <AppBarr />

      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}

export default Layout;
