import 'modern-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './GlobalStyles';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/operations';
import {
  selectIsUserLoading,
  selectUserError,
  selectIsRefreshingUser,
  selectContactsError,
  selectIsLoading,
} from 'redux/selectors';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { Loading } from './Loading/Loading';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

import GlobalLayout from '../components/GlobalLayout/GlobalLayout';
const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  const isRefreshingUser = useSelector(selectIsRefreshingUser);
  const isUserLoading = useSelector(selectIsUserLoading);
  const isUserError = useSelector(selectUserError);
  const isContactsError = useSelector(selectContactsError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        {!isRefreshingUser && (
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<Homepage />} />

              <Route
                path="contacts"
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route
                path="login"
                element={<RestrictedRoute component={<LoginPage />} />}
              />
              <Route
                path="register"
                element={<RestrictedRoute component={<RegistrationPage />} />}
              />

              <Route path="*" element={<Homepage />} />
            </Route>
          </Routes>
        )}
      </Suspense>
      {isUserLoading && <Loading />}
      {isLoading && <Loading />}
      {isUserError && <ErrorMessage message={isUserError} />}
      {isContactsError && <ErrorMessage message={isUserError} />}
    </>
  );
};