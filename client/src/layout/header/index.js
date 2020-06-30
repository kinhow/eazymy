import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const links = [
  { name: 'Categories', id: '1' },
  { name: 'Notification', id: '2' },
  { name: 'Login /Sign up', id: '3' },
  { name: 'Help', id: '4' },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={'/'} className={styles.title}>
          <span className={styles.title1}>eazy</span>
          <span className={styles.title2}>.my</span>
        </Link>

        <ul className={styles.navLink}>
          {links.map(item => (
            <li className={styles.itemLinks} key={item.id}>{item.name}</li>
          ))}
        </ul>

        <div className={styles.burger}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
