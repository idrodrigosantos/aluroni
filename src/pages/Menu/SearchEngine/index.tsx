import { Dispatch, SetStateAction } from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './SearchEngine.module.scss';

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: Props) {
  return (
    <>
      <div className={styles.searchEngine}>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar"
        />
        <CgSearch size={20} color="#4C4D5E" />
      </div>
    </>
  );
}
