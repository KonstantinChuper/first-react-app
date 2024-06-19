import React from 'react'
import main_logo from "../assets/main_logo.svg"
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={main_logo} alt="logo" />
      <nav className={styles.navbar}>
        <a className={styles.link} href="#">Главная</a>
        <div className={styles.divider}></div>
        <a className={styles.link} href="#">Музыка</a>
        <div className={styles.divider}></div>
        <a className={styles.link} href="#">Сообщества</a>
        <div className={styles.divider}></div>
        <a className={styles.link} href="#">Друзья</a>
      </nav>
      <div className={styles.space}></div>
    </header>
  );
}
