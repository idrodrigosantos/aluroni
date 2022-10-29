import menu from './items.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  search: string;
  filter: number | null;
  sort: string;
}

export default function Items(props: Props) {
  const [list, setList] = useState(menu);
  const { search, filter } = props;

  function testSearch(title: string) {
    // 'i' -> case insensitive
    const regex = new RegExp(search, 'i');

    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) {
      return filter === id;
    }

    return true;
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );

    setList(newList);
  }, [search, filter]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
