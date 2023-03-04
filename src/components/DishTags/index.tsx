import classNames from 'classnames';
import { Dish } from 'types/Dish';
import styles from './DishTags.module.scss';

export function DishTags({ category, size, serving, price }: Dish) {
  const foodCategories = {
    pastas: 'Massas',
    meats: 'Carnes',
    combos: 'Combos',
    vegans: 'Veganos',
  };

  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__type]: true,
          [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {foodCategories[category.label as keyof typeof foodCategories]}
      </div>

      <div className={styles.tags__portion}>{size}g</div>

      <div className={styles.tags__amountPeople}>
        Serve {serving} {serving === 1 ? 'pessoa' : 'pessoas'}
      </div>

      <div className={styles.tags__price}>
        R$ {price.toFixed(2).replace('.', ',')}
      </div>
    </div>
  );
}
