import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import SearchEngine from './SearchEngine';
import { useState } from 'react';

export default function Menu() {
  const [search, setSearch] = useState('');

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
      </section>
    </main>
  );
}
