import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { close } from "ionicons/icons";
import React from "react";

const Modal = ({ showModal, closeModal, content, type = "Modal" }) => {
  return (
    <IonModal isOpen={showModal}>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>{type}</IonTitle>
          <ion-buttons slot="end">
            <IonButton onClick={closeModal}>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </ion-buttons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>{content}</IonContent>
    </IonModal>
  );
};

export default Modal;
