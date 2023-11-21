import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDiUphCo1rv_08jAvCSrCLchwhFuyHirGw",
    authDomain: "until-afternoon-remake.firebaseapp.com",
    databaseURL: "https://until-afternoon-remake-default-rtdb.firebaseio.com",
    projectId: "until-afternoon-remake",
    storageBucket: "until-afternoon-remake.appspot.com",
    messagingSenderId: "931649563431",
    appId: "1:931649563431:web:ae93194d6850aad19e5702",
    measurementId: "G-6T0S8DQ5P9"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
