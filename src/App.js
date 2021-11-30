import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import { fetchCurrentUser } from 'redux/auth/auth-slice';
import { getCurrentUser } from 'redux/auth/authSelectors';

import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import ContactView from 'views/ContactView';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

function App() {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <AppBar />
      {isCurrentUser && (
        <>
          <Switch>
            <PublicRoute exact path="/" restricted>
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" redirectTo="/" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/">
              <ContactView />
            </PrivateRoute>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default App;
