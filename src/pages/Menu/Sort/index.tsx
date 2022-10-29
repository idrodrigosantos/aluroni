import { Dispatch, SetStateAction, useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import options from './options.json';
import styles from './Sort.module.scss';

export type SortOptions = '' | 'portion' | 'amount_people' | 'price';

interface Props {
  sort: string;
  setSort: Dispatch<SetStateAction<SortOptions>>;
}

export default function Sort({ sort, setSort }: Props) {
  const [open, setOpen] = useState(false);
  const sortName =
    sort && options.find((option) => option.value === sort)?.name;

  return (
    <button
      className={classNames({
        [styles.sort]: true,
        [styles['sort--active']]: sort !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{sortName || 'Ordenar'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdOutlineKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.sort__options]: true,
          [styles['sort__options--active']]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.sort__option}
            key={option.value}
            onClick={() => setSort(option.value as SortOptions)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
