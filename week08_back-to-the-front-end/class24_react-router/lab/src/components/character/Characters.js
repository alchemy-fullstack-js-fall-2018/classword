import React, { Component, Fragment } from 'react';
import { getCharacters } from '../../services/rickAndMorty';
import Pageable from '../pageable/Pageabale';
import styles from './Characters.css';

export default class Characters extends Component {
  state = {
    loading: false,
    currentPage: 1,
    totalPages: 1,
    status: '',
    characters: []
  };

  fetchCharacters = () => {
    const { currentPage, status } = this.state;
    this.setState({ loading: true, characters: [] }, () => {
      getCharacters(currentPage, { status })
        .then(res => {
          this.setState({
            totalPages: res.info.pages,
            characters: res.results,
            loading: false
          });
        });
    });
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentPage !== this.state.currentPage ||
      prevState.status !== this.state.status) {
      this.fetchCharacters();
    }
  }

  handlePageUpdate = page => {
    this.setState({ currentPage: page });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { loading,
      characters,
      status,
      currentPage,
      totalPages } = this.state;

    const charactersComponents = characters.map(character => {
      return <Character key={character.id}
        name={character.name}
        image={character.image} />;
    });

    const statusOptions = ['alive', 'dead', 'unknown', ''].map(status => {
      return <option key={status} value={status}>{status}</option>;
    });

    return (
      <Fragment>
        <select name="status" defaultValue={status} onChange={this.handleChange}>
          {statusOptions}
        </select>
        <Pageable currentPage={currentPage}
          updatePage={this.handlePageUpdate}
          totalPages={totalPages} />
        {loading && <img className={styles.loader} src="https://files.slack.com/files-pri/T6FCZF1HR-FE4L0PC5S/image.png" />}
        <div className={styles.characters}>
          {charactersComponents}
        </div>
      </Fragment>
    );
  }
}

const Character = ({ name, image }) => {
  return <div className={styles.character}>
    <h3>{name}</h3>
    <img src={image} />
  </div>;
};
