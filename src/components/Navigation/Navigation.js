import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className={s.link}
          to="/contacts"
          exact
          // className={s.link}
          // activeClassName={s.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
