import React from "react";
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from "@ionic/react";
import "../index.scss";
import { add } from "ionicons/icons";

const List = ({ list = [], title, onClick, onBtnClick }) => {
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>{title}</IonLabel>
        <IonButton onClick={onBtnClick}>
          <IonIcon slot="icon-only" icon={add} />
        </IonButton>
      </IonListHeader>
      {list && list.map((item, i) => (
        <IonItem key={item.id || i} onClick={() => onClick(item)}>
          <IonLabel>{item.name}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default List;
