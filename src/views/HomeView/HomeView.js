import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Home.module.css';

function HomeView() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={s.home}>
      {!isLoggedIn ? (
        <div>
          <div className={s.box}>
            <span>Access the phone book </span>
            <NavLink className={s.link} to="/register">
              Registration
            </NavLink>
          </div>

          <div className={s.box}>
            <span> Alredy have an account? </span>
            <NavLink className={s.link} to="/login">
              Login
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={s.box}>
          <span>Open you phonebook </span>
          <NavLink className={s.link} to="/contacts">
            contacts
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default HomeView;
