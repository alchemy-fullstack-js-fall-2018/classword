import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './NoteForm.css';

export default class NoteForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    title: '',
    body: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { title, body } = this.state;
    event.preventDefault();
    this.props.onSubmit({ title, body });
  };

  render() {
    const { title, body } = this.state;
    return (
      <form className={styles.noteForm} onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Create a note</legend>

          <p>
            <label>Title</label>
            <input name="title" value={title} onChange={this.handleChange} />
          </p>

          <p>
            <label>Body</label>
            <textarea name="body" value={body} onChange={this.handleChange} />
          </p>

          <button type="submit">Add Note!</button>
        </fieldset>
      </form>
    );
  }
}
