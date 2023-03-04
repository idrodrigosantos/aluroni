import styles from './Dish.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import menu from 'data/menu.json';

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = menu.find((item) => item.id === Number(id));

  if (!dish) {
    return '';
  }

  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>

      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>

        <div className={styles.image}>
          <img src={dish.image} alt={dish.title} />
        </div>

        <div className={styles.content}>
          <p className={styles.content__content}>{dish.description}</p>

          <div className={styles.tags}>
            <div
              className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${dish.category.label.toLowerCase()}`]]:
                  true,
              })}
            >
              {dish.category.label}
            </div>

            <div className={styles.tags__portion}>{dish.size}</div>

            <div className={styles.tags__amountOfPeople}>
              Serve {dish.serving} pessoa{dish.serving === 1 ? '' : 's'}
            </div>

            <div className={styles.tags__value}>R$ {dish.price.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
