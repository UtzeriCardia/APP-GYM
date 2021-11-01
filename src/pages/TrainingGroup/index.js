import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonItemDivider,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { useHistory, useParams } from "react-router";
import {
  fetchTrainingGroupData,
  fetchDeleteExercise,
} from "../../actions/TrainingGroup";
import { add } from "ionicons/icons";
import Modal from "../../components/Modal";
import AddingModal from "./components/AddingModal";
import Exercise from "./components/Exercise";
import EditModal from "./components/EditModal";

const TrainingGroup = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedExerciseId, setSelectedExerciseId] = useState();
  const { data } = useSelector((state) => state.trainingGroup);

  useEffect(() => {
    dispatch(fetchTrainingGroupData(id));
  }, [dispatch, id]);

  const onExerciseDelete = (exerciseId) => {
    dispatch(fetchDeleteExercise({ id, exerciseId }));
  };
  const onExerciseEdit = (exerciseId) => {
    setEditModal(true)
    setSelectedExerciseId(exerciseId);
  };

  const onExerciseDuplicate = (exerciseId) => {};

  const onAdd = () => {
    setAddModal(true);
  };

  const loadData = (event) => {
    setTimeout(() => {
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  };

  const onSave = () => {
    setAddModal(false);
    dispatch(fetchTrainingGroupData(id));
  };

  const onSaveEdit = () => {
    setEditModal(false);
    dispatch(fetchTrainingGroupData(id));
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{data.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonInfiniteScroll threshold="100px" ionInfinite={(e) => loadData(e)}>
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          >
            {data.types && <IonItemDivider>Esercizi</IonItemDivider>}
            {data.types ? (
              Object.values(
                data.types
              ).map(({ name, repetitions, load, time, series, id }) => (
                <Exercise
                  key={id}
                  name={name}
                  repetitions={repetitions}
                  series={series}
                  load={load}
                  time={time}
                  id={id}
                  onDelete={onExerciseDelete}
                  onEdit={onExerciseEdit}
                  onDuplicate={onExerciseDuplicate}
                />
              ))
            ) : (
              <IonLabel>Inserisci un nuovo esercizio!</IonLabel>
            )}
          </IonInfiniteScrollContent>
        </IonInfiniteScroll>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton size="small" onClick={onAdd}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <Modal
          showModal={addModal}
          closeModal={() => setAddModal(false)}
          type="Add exercise"
          content={<AddingModal itemId={data.id} closeModal={onSave} />}
        />
        <Modal
          showModal={editModal}
          closeModal={() => setEditModal(false)}
          type="Edit exercise"
          content={
            <EditModal
              itemId={data.id}
              data={data && data.types && data?.types[selectedExerciseId]}
              closeModal={onSaveEdit}
            />
          }
        />
      </IonContent>
    </IonPage>
  );
};

export default TrainingGroup;
