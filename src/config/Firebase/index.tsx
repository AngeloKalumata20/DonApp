// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJtZCVd_3HX4E6mSsx_SXyvqCHnMpzioE',
  authDomain: 'donnproject-521af.firebaseapp.com',
  projectId: 'donnproject-521af',
  storageBucket: 'donnproject-521af.appspot.com',
  messagingSenderId: '589946625721',
  appId: '1:589946625721:web:523f12492d349956c24568',
  databaseURL: 'https://donnproject-521af-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
