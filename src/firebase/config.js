import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDU0BdA15xhHG7RZm-zv1x1RoPjGH3SNZI',
  authDomain: 'project-management-site-827a9.firebaseapp.com',
  projectId: 'project-management-site-827a9',
  storageBucket: 'project-management-site-827a9.appspot.com',
  messagingSenderId: '344043533977',
  appId: '1:344043533977:web:fe677ed3a0bd4c3c3d6a08',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
