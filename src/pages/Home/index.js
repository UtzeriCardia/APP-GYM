import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../../actions/Homepage";

export default function Homepage() {
  const dispatch = useDispatch();
  const { myState } = useSelector((state) => state);

  useEffect(() => {
    // dispatch(fetchData());
  }, [dispatch]);

  const action = (payload) => {
    // dispatch(myAction(payload));
  };

  return (
    <IonPage>
      <IonContent>HOMEPAGE</IonContent>
    </IonPage>
  );
}
