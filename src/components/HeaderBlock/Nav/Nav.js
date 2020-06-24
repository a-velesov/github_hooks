import React from 'react';
import styles from './Nav.module.scss';

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuItems}>
        <li>
        Главная
      </li>
        <li>
        Портфолио
      </li>
        <li>
        Контакты
      </li>
      </ul>
    </nav>

  );
};

export default Nav;