import { useState } from 'react';
import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Sort, { SortOptions } from './Sort';
import Items from './Items';
import styles from './Menu.module.scss';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sort, setSort] = useState<SortOptions>('');

  return (
    <section className={styles.menu}>
      <h3 className={styles.menu__title}>Cardápio</h3>

      <SearchEngine search={search} setSearch={setSearch} />

      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />

        <Sort sort={sort} setSort={setSort} />
      </div>

      <Items search={search} filter={filter} sort={sort} />
    </section>
  );
}
