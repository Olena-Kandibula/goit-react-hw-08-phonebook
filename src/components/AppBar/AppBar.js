import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from '../AppBar/AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={s.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
export default AppBar;
