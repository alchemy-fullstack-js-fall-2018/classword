import React from 'react';
import { rootLinks } from '../../routes';
import styles from './Header.module.css';

export default function Header() {
  console.log(styles)
  return (
    <header className={styles.header}>
      <nav>
        {rootLinks}
      </nav>
    </header>
  )
}
