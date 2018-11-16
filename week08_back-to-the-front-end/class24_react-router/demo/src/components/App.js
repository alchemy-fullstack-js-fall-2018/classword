import React from 'react';
import { PageableCharacters } from './character/Character';
import { PageableLocations } from './location/Location';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.characters}>
        <PageableCharacters currentPage={1} updateTotalPages={() => { }} />
      </div>
      <div className={styles.locations}>
        <PageableLocations />
      </div>
    </div>
  );
}
