import React, { PureComponent } from 'react';
import './App.css';
import { FirebasePeople, FirebasePerson } from './People';
import { addPerson } from './actions/people';
import { subscribe } from './services/firebase';

class App extends PureComponent {

  componentDidMount() {
    subscribe(user => console.log(user));
  }

  handleClick = () => {
    const names = ['me', 'my', 'you', 'ok'];
    const randomNumber = Math.floor(Math.random() * names.length)
    addPerson({ name: names[randomNumber] })
  }

  render() {
    return (
      <>
        <FirebasePerson id="2Uz2mHAYSnJ7nyIN9I7t" />
        <FirebasePeople />
        <button onClick={this.handleClick}>Add person</button>
      </>
    );
  }
}

export default App;
