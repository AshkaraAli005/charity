import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCI9Ygy4Kw4AlR-zzyA9nnmBO9Goi-1l-s",
  authDomain: "charity-ee38f.firebaseapp.com",
  projectId: "charity-ee38f",
  storageBucket: "charity-ee38f.appspot.com",
  messagingSenderId: "408424557805",
  appId: "1:408424557805:web:dbfb3b4d765824d022b0e4"
};
<<<<<<< HEAD

=======
>>>>>>> 0b14791c13f53b70dc5499e3d137567268e20991
  firebase.initializeApp(firebaseConfig)
  const db =firebase.firestore();
  const auth =firebase.auth();
  const storage =firebase.storage();
  
  export {db,auth,storage};
  
  
