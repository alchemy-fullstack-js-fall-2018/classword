import { personRef } from '../services/firebase';

export const addPerson = ({ name }) => {
  personRef.add({ name });
};
