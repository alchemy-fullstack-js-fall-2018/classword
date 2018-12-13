import React from 'react';
import firebaseConnect from './firebaseConnect';
import { personRef } from './services/firebase';

const Person = ({ person }) => {
  if (!person) return null;
  return <p>{person.name}</p>;
}

const People = ({ title, people }) => {
  if (!people) return null;
  return (
    <div>
      <h1>{title}</h1>
      {people.map(person => <Person person={person} />)}
    </div>
  )
}


export const FirebasePeople = firebaseConnect(
  { title: 'hi there' },
  firestore => ({ people: firestore.collection('people') })
)(People);

export const FirebasePerson = firebaseConnect(
  {},
  (firestore, props) => ({ person: firestore.collection('people').doc(props.id) })
)(Person);
