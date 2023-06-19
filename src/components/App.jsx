import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoutes } from './RestrictedRoutes';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // const { isLoading, error } = useSelector(getContact);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'hello its loading'
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<PrivateRoute component={<Contacts />} redirectTo='/contacts'/>} />
          <Route
            path="/login"
            element={
              <RestrictedRoutes component={<Login/>} redirectTo="/contacts" />
            }
          />

          <Route path="/register" element={ <RestrictedRoutes component={<Register />} redirectTo="/login" />} />
        </Route>
      </Routes>
      <ToastContainer/>
      <GlobalStyle />
    </Container>
  );
};
