import { useState } from 'react';
import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Sort, { SortOptions } from './Sort';
import Items from './Items';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sort, setSort] = useState<SortOptions>('');

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A Casa da Massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Sort sort={sort} setSort={setSort} />
        </div>
        <Items search={search} filter={filter} sort={sort} />
      </section>
    </main>
  );
}
