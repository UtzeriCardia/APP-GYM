import { IonInput, IonItem, IonItemDivider } from "@ionic/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import { fetchSaveGroupName } from "../../../actions/Training";
import "../index.scss";

export default function AddingModal({closeModal}) {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const onSave = () => {
    dispatch(fetchSaveGroupName(name));
    closeModal()
  };

  return (
    <>
      <IonItemDivider className='item-divider'>Nome Gruppo</IonItemDivider>
      <IonItem>
        <IonInput
          value={name}
          placeholder="Inserisci nome"
          onIonChange={(e) => setName(e.detail.value)}
        ></IonInput>
      </IonItem>

      <Button position="bottom" expand="full" text="Salva" onClick={onSave} />
    </>
  );
}
