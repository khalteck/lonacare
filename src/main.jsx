import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FirebaseAppProvider, FirestoreProvider } from "reactfire";
import { db, firebaseConfig } from "./firebase/firebase-config";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirestoreProvider sdk={db}>
        <BrowserRouter basename="/">
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </BrowserRouter>
      </FirestoreProvider>
    </FirebaseAppProvider>
    ,
  </React.StrictMode>
);
