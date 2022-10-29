import { useEffect, useState } from 'react';
import menu from './items.json';
import Item from './Item';
import styles from './Items.module.scss';

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

  const sortCrescentProperty = (
    list: typeof menu,
    property: 'size' | 'serving' | 'price'
  ) => {
    return list.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  };

  function sortList(newList: typeof menu) {
    switch (sort) {
      case 'portion':
        return sortCrescentProperty(newList, 'size');
      case 'amount_people':
        return sortCrescentProperty(newList, 'serving');
      case 'price':
        return sortCrescentProperty(newList, 'price');
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );

    setList(sortList(newList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filter, sort]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
