import React from 'react';
import firebase from 'firebase';
import { firestore } from './services/firebase';

//
// const subscribers = {
//   people: { ref: personRef, idField: 'id/myId' }
// }

export default (withProps, subscribersFn) => Component => {
  return class FirebaseConnect extends React.PureComponent {
    state = {
      unsubscribers: []
    }

    componentDidMount() {
      const subscribers = subscribersFn(firestore, this.props);
      const unsubscribers = Object.keys(subscribers).map(propKey => {
        let ref = subscribers[propKey];

        return ref.onSnapshot(snapshot => {
          if (snapshot instanceof firebase.firestore.DocumentSnapshot) {
            // If we have a single document, set that document in state
            this.setState({ [propKey]: snapshot.data() });
          } else if (snapshot instanceof firebase.firestore.QuerySnapshot) {
            // if we have a list of documents, set the list in state
            const data = snapshot.docs.map(doc => doc.data());
            this.setState({ [propKey]: data });
          }
        })
      });

      this.setState({ unsubscribers });
    }

    componentWillUnmount() {
      this.state.unsubscribers.map(unsubscriber => unsubscriber());
    }

    render() {
      const props = { ...this.props, ...this.state, ...withProps };

      return <Component {...props} />;
    }
  }
}
