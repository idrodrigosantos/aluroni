import { useState } from 'react';
import { Filters } from './Filters';
import { Items } from './Items';
import { SearchEngine } from './SearchEngine';
import { Sort, SortOptions } from './Sort';
import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sort, setSort] = useState<SortOptions>('');

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Cardápio</h3>

      <SearchEngine search={search} setSearch={setSearch} />

      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />

        <Sort sort={sort} setSort={setSort} />
      </div>

      <Items search={search} filter={filter} sort={sort} />
    </section>
  );
}
