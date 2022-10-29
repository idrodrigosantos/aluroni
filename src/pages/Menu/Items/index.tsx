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
  const { search, filter, sort } = props;

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

  function order(newList: typeof menu) {
    switch (sort) {
      case 'portion':
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case 'amount_people':
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case 'price':
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );

    setList(order(newList));
  }, [search, filter, sort]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
