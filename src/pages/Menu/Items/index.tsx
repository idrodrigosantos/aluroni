import { useEffect, useState } from 'react';
import menu from 'data/menu.json';
import Item from './Item';
import styles from './Items.module.scss';
import { Menu } from 'types/Dish';

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
    listSortCrescent: Menu,
    property: 'size' | 'serving' | 'price'
  ) => {
    return listSortCrescent.sort((a, b) =>
      a[property] > b[property] ? 1 : -1
    );
  };

  function sortList(newList: Menu) {
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
  }, [search, filter, sort]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
