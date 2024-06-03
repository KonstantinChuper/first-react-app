import styles from './HeroSection.module.css'
import Location from '../../../assets/Location.svg'
import Search from "../../../assets/Search.svg"
import Background from "../../../assets/Background.svg";

export default function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <h1 className={styles.hero_header}>
        Один клик <br /> и работа в кармане
      </h1>
      <form className={styles.search_bar}>
        <img className={styles.icon} src={Search} alt="search" />
        <input type="text" className={styles.search_bar_company} placeholder="Должность или компания" />
        <span className={styles.form_span} />
        <img className={styles.icon} src={Location} alt="location" />
        <input type="text" className={styles.search_bar_city} placeholder="Город, Страна" />
        <button className={styles.button}>Поиск</button>
      </form>
      <img className={styles.background} src={Background} alt="Background" />
    </section>
  );
}
