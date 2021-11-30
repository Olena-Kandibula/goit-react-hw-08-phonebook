import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form } from 'components/Form/Form';
import { logIn } from 'redux/auth/auth-slice';

const LoginView = () => {
  const { status, error } = useSelector(state => state.auth);
  return (
    <div>
      <Form title="Login" handleClick={logIn} />
      <p>
        {status === 'rejected' && <h2>Ups..{error}</h2>}
        or
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginView;
