import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBInYHyFiN76ayyUEf-nvmiIUGsg3sFDCA",
  authDomain: "movie-app-bfbfb.firebaseapp.com",
  projectId: "movie-app-bfbfb",
  storageBucket: "movie-app-bfbfb.appspot.com",
  messagingSenderId: "476486922412",
  appId: "1:476486922412:web:2f44c87fe9968856f66f09",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);


export { auth, db };
