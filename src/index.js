import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { store } from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyDt87_VA-mGbeb1kNbmU-xD0o0UkDwo8xY",
  authDomain: "gymapp-99b4c.firebaseapp.com",
  projectId: "gymapp-99b4c",
  storageBucket: "gymapp-99b4c.appspot.com",
  messagingSenderId: "445097408374",
  appId: "1:445097408374:web:8560d819e22f0e2b0aec57",
  databaseURL:
    "https://gymapp-99b4c-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
