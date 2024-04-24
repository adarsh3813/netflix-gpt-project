// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXa_FsH6gtL3A3XZimRhwVB1TOxGnAC60",
  authDomain: "netflixgpt-9080a.firebaseapp.com",
  projectId: "netflixgpt-9080a",
  storageBucket: "netflixgpt-9080a.appspot.com",
  messagingSenderId: "182590372658",
  appId: "1:182590372658:web:a784c00904556073cc752b",
  measurementId: "G-36E59MWRL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
