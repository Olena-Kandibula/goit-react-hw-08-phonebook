import { Link } from 'react-router-dom';
import { Form } from 'components/Form/Form';
import { register } from 'redux/auth/auth-slice';

function RegisterView() {
  return (
    <div>
      <Form title="Sign Up" handleClick={register} />

      <p>
        Alredy have an account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterView;
