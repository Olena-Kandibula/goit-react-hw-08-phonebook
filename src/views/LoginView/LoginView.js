import { Link } from 'react-router-dom';

import { Form } from 'components/Form/Form';
import { logIn } from 'redux/auth/auth-slice';

const LoginView = () => {
  return (
    <div>
      <Form title="Login" handleClick={logIn} />
      <p>
        or
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginView;
