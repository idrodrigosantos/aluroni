import { useNavigate } from 'react-router-dom';
import menu from 'data/menu.json';
import ourHome from 'assets/our-home.png';
import { Dish } from 'types/Dish';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export function Home() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirectForDetails(dish: Dish) {
    navigate(`/prato/${dish.id}`, { state: { dish }, replace: true });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da Cozinha</h3>

      <div className={styles.recommended}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommend}>
            <div className={styles.recommend__image}>
              <img src={item.image} alt={item.title} />
            </div>

            <button
              className={styles.recommend__button}
              onClick={() => redirectForDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>

      <h3 className={stylesTheme.title}>Nossa Casa</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Casa do Aluroni" />

        <div className={styles.ourHome__address}>
          Avenida Principal, 100 <br /> <br /> Centro - SP
        </div>
      </div>
    </section>
  );
}
