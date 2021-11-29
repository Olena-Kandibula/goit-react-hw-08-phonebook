import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
