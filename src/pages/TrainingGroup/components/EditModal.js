import React, { useState } from "react";
import { IonInput, IonItem, IonItemDivider } from "@ionic/react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import { fetchUpdateExercise } from "../../../actions/TrainingGroup";
import "../index.scss";

export default function EditModal({ itemId, data, closeModal }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState(data);

  const onSave = () => {
    dispatch(fetchUpdateExercise({ itemId, values, exerciseId: values.id }));
    closeModal();
  };

  return (
    <>
      <IonItemDivider className="item-divider">Nome Esercizio</IonItemDivider>
      <IonItem>
        <IonInput
          value={values.name}
          placeholder="Inserisci nome"
          onIonChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.detail.value }))
          }
        ></IonInput>
      </IonItem>
      <IonItemDivider className="item-divider">Carico</IonItemDivider>
      <IonItem>
        <IonInput
          value={values.load}
          placeholder="Inserisci kg"
          type="number"
          onIonChange={(e) =>
            setValues((prev) => ({ ...prev, load: e.detail.value }))
          }
        ></IonInput>
      </IonItem>
      <IonItemDivider className="item-divider">Ripetizioni</IonItemDivider>
      <IonItem>
        <IonInput
          value={values.repetitions}
          placeholder="Inserisci numero ripetizioni"
          type="number"
          onIonChange={(e) =>
            setValues((prev) => ({
              ...prev,
              repetitions: e.detail.value,
            }))
          }
        ></IonInput>
      </IonItem>
      <IonItemDivider className="item-divider">Serie</IonItemDivider>
      <IonItem>
        <IonInput
          value={values.series}
          type="number"
          placeholder="Inserisci numero serie"
          onIonChange={(e) =>
            setValues((prev) => ({ ...prev, series: e.detail.value }))
          }
        ></IonInput>
      </IonItem>
      <IonItemDivider className="item-divider">Tempo</IonItemDivider>
      <IonItem>
        <IonInput
          value={values.time}
          type="number"
          placeholder="Inserisci numero serie"
          onIonChange={(e) =>
            setValues((prev) => ({ ...prev, time: e.detail.value }))
          }
        ></IonInput>
      </IonItem>

      <Button position="bottom" expand="full" text="Salva" onClick={onSave} />
    </>
  );
}
