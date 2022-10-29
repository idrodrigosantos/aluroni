import styles from './Order.module.scss';
import options from './options.json';
import { Dispatch, SetStateAction, useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

export type SortOptions = '' | 'portion' | 'amount_people' | 'price';

interface Props {
  order: string;
  setOrder: Dispatch<SetStateAction<SortOptions>>;
}

export default function Order({ order, setOrder }: Props) {
  const [open, setOpen] = useState(false);
  const orderName =
    order && options.find((option) => option.value === order)?.name;

  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles['order--active']]: order !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{orderName || 'Ordenar'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdOutlineKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles['order__options--active']]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.order__option}
            key={option.value}
            onClick={() => setOrder(option.value as SortOptions)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
