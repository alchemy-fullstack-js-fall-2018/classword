import React, { PureComponent } from 'react';
import { getCharacters } from '../../services/rickAndMortyApi';
import Pageable from '../pagable/Pageable';
import styles from './Character.css';
import { withResults } from '../results/Results';

export const Character = ({ result }) => {
  const { name, image } = result;
  return (
    <li className={styles.character}>
      <h3>{name} </h3>
      <img src={image} />
    </li>
  );
};

export class PageableCharacters extends PureComponent {
  state = {
    species: 'human'
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    console.log(this.props);
    const { species } = this.state;

    const speciesOptions = ['human', 'robot', 'alien', 'humanoid'].map(s => {
      return <option key={s} value={s}>{s}</option>;
    });

    return (
      <div className={styles.characters}>
        <select name="species" defaultValue={species} onChange={this.onChange}>
          {speciesOptions}
        </select>
        <Pageable
          resultsFn={getCharacters}
          resultsQuery={{ species }}
          ResultComponent={Character} />
      </div>
    );
  }
}

export const CharactersWithResults = withResults(getCharacters, {}, PageableCharacters);
