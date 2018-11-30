import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { handleAuth, signup } from '../../services/auth';
import { ROUTES } from '../../routes';

@withRouter
export class Signup extends PureComponent {
  state = {
    email: '',
    password: '',
    name: '',
    photo: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password, name, photo } = this.state;
    signup(email, password, name, photo)
      .then(() => this.props.history.push(ROUTES.ARTISTS.linkTo()));
  };

  render() {
    const { email, password, name, photo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="email" value={email} onChange={this.handleChange} />
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <input name="name" value={name} onChange={this.handleChange} />
        <input name="photo" value={photo} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export const Callback = withRouter(({ history }) => {
  handleAuth()
    .then(() => {
      return history.replace(ROUTES.ARTISTS.linkTo());
    });

  return <h1>Loading</h1>;
});
