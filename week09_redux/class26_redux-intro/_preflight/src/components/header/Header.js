import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to={ROUTES.HOME.linkTo()}>Home</Link>
        <Link to={ROUTES.NOTES_BY_TITLE.linkTo()}>Notes By Title</Link>
        <Link to={ROUTES.NOTES_BY_LENGTH.linkTo()}>Notes By Length</Link>
        <Link to={ROUTES.HI_NOTES.linkTo()}>Hi Notes</Link>
      </nav>
      <h1>Note taking</h1>
    </header>
  );
}
