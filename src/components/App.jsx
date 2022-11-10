import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from './Container/index';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { refreshUser } from 'redux/auth/operations';

import { selectIsRefreshing } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Loader from './Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />
            </Route>
          </Routes>
          {/* </Suspense> */}
        </>
      )}
    </Container>
  );
}
