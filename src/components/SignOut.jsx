import React from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const auth = firebase.auth();

export default function SignOut() {

  return auth.currentUser && (
      <button onClick = {()=> auth.signOut()} > Sign out </button>
  )
}
