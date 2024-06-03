import styles from "./Header.module.css";

function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.logo_container}>
          <a href="#" className={styles.logo}>
            Cooljob
          </a>
          <div className={styles.find_job_container}>
            <a href="#" className={styles.find_job}>
              Поиск работы
            </a>
            <a href="#" className={styles.find_job}>
              Поиск стартапов
            </a>
          </div>
        </div>
        <div className={styles.reg_container}>
          <a href="#" className={styles.reg}>
            Регистрация
          </a>
          <button className={styles.sign_button}>Вход</button>
        </div>
      </header>
  );
}
export default Header;
