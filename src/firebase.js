import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

  firebase.initializeApp(firebaseConfig)
  const db =firebase.firestore();
  const auth =firebase.auth();
  const storage =firebase.storage();
  
  export {db,auth,storage};
  
  
