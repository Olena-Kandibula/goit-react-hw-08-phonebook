import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/auth-slice';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.userMenu}>
      <span className={s.wellcome}>Wellcome {name}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        EXIT
      </button>
    </div>
  );
}
