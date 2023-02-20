import { Outlet } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A Casa da Massa</div>
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
}
