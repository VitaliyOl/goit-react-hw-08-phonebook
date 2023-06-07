import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header, NavHeader, StyledLink } from './Layout.styled';

function Layout() {
  return (
    <>
      <AppBar />

      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}

export default Layout;
