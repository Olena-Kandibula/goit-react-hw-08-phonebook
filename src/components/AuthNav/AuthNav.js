import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <div className={s.authNav}>
      <NavLink className={s.link} to="/register">
        Registration
      </NavLink>
      <NavLink className={s.link} to="/login">
        Login
      </NavLink>
    </div>
  );
}
export default AuthNav;
