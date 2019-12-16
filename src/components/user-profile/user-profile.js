import React from 'react';
import { auth, firestore } from '../firebase/db';

const user = firestore.collection('users').doc('9KNwPmqWduTkGAOCNgsk9THy8Vl1').get()
             .then(doc => (console.log(doc.data())));

const UserProfile = () => (
  <h2>UserProfile</h2>
)

export default UserProfile;