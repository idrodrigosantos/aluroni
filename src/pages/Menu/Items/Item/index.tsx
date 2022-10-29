import classNames from 'classnames';
import menu from '../items.json';
import styles from './Item.module.scss';

type Props = typeof menu[0];

export default function Item(props: Props) {
  const { title, description, category, size, serving, price, image } = props;

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
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__portion}>{size}g</div>
          <div className={styles.item__amountPeople}>
            Serve {serving} {serving === 1 ? 'pessoa' : 'pessoas'}
          </div>
          <div className={styles.item__price}>
            R$ {price.toFixed(2).replace('.', ',')}
          </div>
        </div>
      </div>
    </div>
  );
}
