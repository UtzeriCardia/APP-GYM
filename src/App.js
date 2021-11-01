import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  ellipse,
  square,
  triangle,
  accessibilityOutline,
  pizzaOutline,
  cashOutline,
  clipboardOutline,
} from "ionicons/icons";
import Notes from "./pages/Notes";
import Training from "./pages/Training";
import Expenses from "./pages/Expenses";
import Diet from "./pages/Diet";
import Homepage from "./pages/Home";
import Login from "./pages/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Modal from "./components/Modal";
import TrainingGroup from "./pages/TrainingGroup";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Training">
            <Training />
          </Route>
          <Route exact path="/Diet">
            <Diet />
          </Route>
          <Route path="/Expenses">
            <Expenses />
          </Route>
          <Route path="/Notes">
            <Notes />
          </Route>
          <Route path="/TrainingGroup/:id" >
            <TrainingGroup />
          </Route>
          {/* <Route path="/tab5">
            <Login />
          </Route> */}
          <Route exact path="/">
            <Redirect to="/Training" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="training" href="/Training">
            <IonIcon icon={accessibilityOutline} />
            <IonLabel>Training</IonLabel>
          </IonTabButton>
          <IonTabButton tab="diet" href="/Diet">
            <IonIcon icon={pizzaOutline} />
            <IonLabel>Diet</IonLabel>
          </IonTabButton>
          <IonTabButton tab="expenses" href="/Expenses">
            <IonIcon icon={cashOutline} />
            <IonLabel>Expenses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notes" href="/Notes">
            <IonIcon icon={clipboardOutline} />
            <IonLabel>Notes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
