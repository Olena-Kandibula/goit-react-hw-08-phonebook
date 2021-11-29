import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Form.module.css';

const Form = ({ title, handleClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title !== 'Login') {
      dispatch(handleClick({ name, email, password }));
    } else {
      dispatch(handleClick({ email, password }));
    }
    reset();
  };

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        {title !== 'Login' && (
          <label className={s.label}>
            <p className={s.text}> Name:</p>
            <input
              className={s.input}
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleChange}
              placeholder="you name"
            />
          </label>
        )}
        <label className={s.label}>
          <p className={s.text}>Email:</p>

          <input
            className={s.input}
            type="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleChange}
            placeholder="***@gmail.com"
          />
        </label>

        <label className={s.label}>
          <p className={s.text}>Password: </p>
          <input
            className={s.input}
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button
          className={s.button}
          type="submit"
          value="Registered"
          exact="false"
        >
          {title}
        </button>
      </form>
    </div>
  );
};

export { Form };
