import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCOVhGsn4an1ZWh1f0Lh2-c_dkMgeQZQtg",
  authDomain: "alchemy-serverless.firebaseapp.com",
  databaseURL: "https://alchemy-serverless.firebaseio.com",
  projectId: "alchemy-serverless",
  storageBucket: "alchemy-serverless.appspot.com",
  messagingSenderId: "1009114248651"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const personRef = firestore.collection('people');

const provider = new firebase.auth.GithubAuthProvider();

export const subscribe = (fn) => {
  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user)
    if (user) {
      fn(user);
    } else {
      firebase.auth().signInWithRedirect(provider);
    }
  });
};
