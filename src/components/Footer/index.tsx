import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
}
