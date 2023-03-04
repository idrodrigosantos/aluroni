import DishTags from 'components/DishTags';
import { Dish } from 'types/Dish';
import styles from './Item.module.scss';

export default function Item(props: Dish) {
  const { title, description, image } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <DishTags {...props} />
      </div>
    </div>
  );
}
