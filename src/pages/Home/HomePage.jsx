import { selectUser, selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Section } from '../../components/Section/Section';
import style from './HomePage.module.css';

export const HomePage = () => {
  const user = useSelector(selectUser);
  const loginStatus = useSelector(selectIsLoggedIn);

  return (
    <Section>
      {loginStatus && user.user !== null ? (
        <h1 className={style.header}>
          Hello {user.user}!<br />
        </h1>
      ) : (
        <h1 className={style.header}>My Phonebook</h1>
      )}
    </Section>
  );
};
