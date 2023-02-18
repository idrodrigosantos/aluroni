import menu from 'data/menu.json';
import styles from './Start.module.scss';

export default function Start() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da Cozinha</h3>

      <div className={styles.recommended}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommend}>
            <div className={styles.recommend__image}>
              <img src={item.image} alt={item.title} />
            </div>

            <button className={styles.recommend__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
