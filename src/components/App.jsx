import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container } from './App.styled';

import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isLoading, error } = useSelector(getContact);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
