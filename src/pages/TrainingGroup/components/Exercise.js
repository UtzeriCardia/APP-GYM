import React from "react";
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from "@ionic/react";
import { copyOutline, createOutline, trashOutline } from "ionicons/icons";

export default function Exercise({
  id,
  load,
  repetitions,
  series,
  name,
  time,
  onDelete,
  onEdit,
  onDuplicate,
}) {
  return (
    <IonItemSliding>
      <IonItemOptions side="start">
        <IonItemOption color="danger" onClick={() => onDelete(id)}>
          <IonIcon slot="icon-only" icon={trashOutline} />
        </IonItemOption>
      </IonItemOptions>

      <IonItem>
        <IonLabel>
          <h2 className="exercise-title">{name}</h2>
          <div className="exercise-wrapper">
            <div>
              <span>Serie:</span> {series}
            </div>
            <div>
              <span>Rip:</span> {repetitions}
            </div>
            <div>
              <span>Kg:</span> {load}
            </div>
            <div>
              <span>Min:</span> {time}
            </div>
          </div>
        </IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption onClick={() => onEdit(id)} color="warning">
          <IonIcon slot="icon-only" icon={createOutline} />
        </IonItemOption>
        <IonItemOption onClick={() => onDuplicate(id)}>
          <IonIcon slot="icon-only" icon={copyOutline} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}
