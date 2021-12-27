import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCuvAEtX_M1pM6S4hNeyC3VAtB--0Rh-9c',
  authDomain: 'maps-2019-267a2.firebaseapp.com',
  databaseURL: 'https://maps-2019-267a2.firebaseio.com',
  projectId: 'maps-2019-267a2',
  storageBucket: 'maps-2019-267a2.appspot.com',
  messagingSenderId: '548863800150',
  appId: '1:548863800150:web:09e9a5015555b47e3e1cf7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

