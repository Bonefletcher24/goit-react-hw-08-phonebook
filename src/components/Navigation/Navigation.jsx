import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Logout } from 'components/Logout/Logout';
import style from '../SharedLayout/SharedLayout.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={isLoggedIn ? style.navWrapper : style.wrapper}>
      <NavLink to="/" className={style.logo}>
        Phonebook
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : style.navLink)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) => (isActive ? style.active : style.navLink)}
          >
            Contacts
          </NavLink>
          <Logout />
        </>
      ) : (
        <>
          <div className={style.liloWrapper}>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? style.active : style.navLink
              }
              end
            >
              Login
            </NavLink>

            <NavLink
              to="register"
              className={({ isActive }) =>
                isActive ? style.active : style.navLink
              }
            >
              Register
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};
